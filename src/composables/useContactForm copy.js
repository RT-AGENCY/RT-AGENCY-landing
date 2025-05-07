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
    service: service,
    privacy: false
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
   */
  const submitForm = async () => {
    if (!validateForm()) return

    try {
      isSubmitting.value = true

      // Здесь будет отправка данных на сервер или в Google Sheets
      // Пример с использованием Google Apps Script для отправки в таблицу
      const googleScriptUrl = 'YOUR_GOOGLE_SCRIPT_URL_HERE' // Заменить на реальный URL

      // Формируем данные для отправки
      const formData = {
        name: form.name,
        company: form.company || 'Не указано',
        phone: form.phone,
        email: form.email,
        message: form.message || 'Не указано',
        service: form.service || 'Общая заявка',
        date: new Date().toISOString()
      }

      // Имитация отправки (заменить на реальный запрос)
      console.log('Sending form data:', formData)

      // В реальном проекте здесь будет запрос к API или Google Scripts
      // await axios.post(googleScriptUrl, formData)

      // Также можно добавить отправку на email через сервисы типа EmailJS
      // или собственный бэкенд

      // Сбрасываем форму после успешной отправки
      Object.keys(form).forEach(key => {
        if (key === 'privacy') {
          form[key] = false
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

    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.')
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    form,
    errors,
    isSubmitting,
    formSubmitted,
    submitForm
  }
}