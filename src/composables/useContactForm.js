import { ref, reactive } from 'vue'
import axios from 'axios'

/**
 * Composable для обработки формы обратной связи
 * @param {String} service - Название услуги, если форма связана с конкретной услугой
 * @returns {Object} - Состояние и методы для работы с формой
 */
export function useContactForm(service = '') {
  // Состояние формы
  const form = reactive({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
    service: service, // Начальное значение может быть передано из пропса
    privacy: false,
    honeypot: '' // Поле-ловушка для ботов
  })

  // Состояние ошибок
  const errors = reactive({
    name: '',
    phone: '',
    email: '',
    privacy: ''
  })

  // Состояние отправки
  const isSubmitting = ref(false)
  const formSubmitted = ref(false)
  const submitError = ref(false)

  /**
   * Валидация формы
   * @returns {Boolean} - Результат валидации
   */
  const validateForm = () => {
    let isValid = true

    // Сбрасываем ошибки
    Object.keys(errors).forEach(key => errors[key] = '')

    // Проверка имени
    if (!form.name.trim()) {
      errors.name = 'Пожалуйста, укажите ваше имя'
      isValid = false
    }

    // Проверка телефона
    if (!form.phone.trim()) {
      errors.phone = 'Пожалуйста, укажите ваш телефон'
      isValid = false
    } else if (!/^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(form.phone)) {
      errors.phone = 'Пожалуйста, укажите корректный номер телефона'
      isValid = false
    }

    // Проверка email
    if (!form.email.trim()) {
      errors.email = 'Пожалуйста, укажите ваш email'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Пожалуйста, укажите корректный email'
      isValid = false
    }

    // Проверка согласия с политикой
    if (!form.privacy) {
      errors.privacy = 'Необходимо согласие с политикой конфиденциальности'
      isValid = false
    }

    return isValid
  }

  /**
   * Отправка формы
   * @returns {Promise<Object>} - Результат отправки
   */
  const submitForm = async () => {
    if (!validateForm()) return { success: false }

    // Проверка на бота (если поле honeypot заполнено, это бот)
    if (form.honeypot) {
      console.log('Bot detected')
      // Имитируем успешную отправку для бота
      return { success: true }
    }

    try {
      isSubmitting.value = true
      submitError.value = false

      // URL скрипта Google Apps Script
      const googleScriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'

      // Формируем данные для отправки
      const formData = {
        name: form.name,
        company: form.company || 'Не указано',
        phone: form.phone,
        email: form.email,
        message: form.message || 'Не указано',
        service: form.service || 'Общая заявка',
        source: typeof window !== 'undefined' ? window.location.href : '',
        date: new Date().toISOString(),
        utmParams: getUtmParams()
      }

      // Отправка данных в Google Sheets
      const response = await axios.post(googleScriptUrl, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      // Отслеживание конверсии
      trackFormSubmission(form.service)

      // Сбрасываем форму после успешной отправки
      Object.keys(form).forEach(key => {
        if (key === 'privacy') {
          form[key] = false
        } else if (key === 'honeypot') {
          form[key] = ''
        } else {
          form[key] = key === 'service' ? service : ''
        }
      })

      // Показываем сообщение об успехе
      formSubmitted.value = true

      // Скрываем сообщение об успехе через 5 секунд
      setTimeout(() => {
        formSubmitted.value = false
      }, 5000)

      return { success: true, data: response.data }
    } catch (error) {
      console.error('Error submitting form:', error)
      submitError.value = true
      return { success: false, error }
    } finally {
      isSubmitting.value = false
    }
  }

  /**
   * Получение UTM-меток из URL
   * @returns {Object} - UTM-метки
   */
  const getUtmParams = () => {
    if (typeof window === 'undefined') return {}

    const urlParams = new URLSearchParams(window.location.search)
    const utmParams = {}

    // Получаем все UTM-метки
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
    utmKeys.forEach(key => {
      const value = urlParams.get(key)
      if (value) utmParams[key] = value
    })

    return utmParams
  }

  /**
   * Отправка события конверсии в системы аналитики
   * @param {String} formType - Тип формы или услуга
   */
  const trackFormSubmission = (formType) => {
    if (typeof window === 'undefined') return

    // Отправка события в Google Analytics 4
    if (window.gtag) {
      window.gtag('event', 'form_submission', {
        'form_type': formType || 'Контактная форма'
      })
    }

    // Отправка события в Яндекс.Метрику
    if (window.ym) {
      const metrikaCounterId = import.meta.env.VITE_METRIKA_ID
      if (metrikaCounterId) {
        window.ym(metrikaCounterId, 'reachGoal', 'form_submission')
      }
    }
  }

  return {
    form,
    errors,
    isSubmitting,
    formSubmitted,
    submitError,
    submitForm
  }
}