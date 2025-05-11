<template>
  <div class="contact-form bg-white rounded-lg shadow-md p-6 md:p-8">
    <h3 class="text-2xl font-bold mb-4">{{ title }}</h3>
    <p class="text-gray-600 mb-6">{{ description }}</p>

    <!-- Форма с FormSubmit -->
    <form
      action="https://formsubmit.co/sasha.af.one@gmail.com"
      method="POST"
      class="space-y-4"
    >
      <!-- Настройки FormSubmit -->
      <input type="hidden" name="_subject" :value="`Новая заявка: ${title}`" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

      <!-- Перенаправление после отправки -->
      <input type="hidden" name="_next" value="https://rt-ads.ru" />

      <!-- Поле-ловушка для ботов (для FormSubmit) -->
      <input type="text" name="_honey" style="display: none" />

      <!-- Поле-ловушка для ботов (оригинальное) -->
      <div style="display: none">
        <input type="text" name="honeypot" autocomplete="off" />
      </div>

      <div class="form-group">
        <label for="name" class="form-label"
          >Имя <span class="text-red-500">*</span></label
        >
        <input
          type="text"
          id="name"
          name="name"
          class="form-input h-10"
          placeholder="Иван Иванов"
          required
        />
      </div>

      <div class="form-group">
        <label for="company" class="form-label">Компания</label>
        <input
          type="text"
          id="company"
          name="company"
          class="form-input h-10"
          placeholder="ООО Рога и Копыта"
        />
      </div>

      <!-- Выпадающий список с услугами -->
      <div class="form-group" v-if="services && services.length">
        <label for="service" class="form-label">Интересующая услуга</label>
        <select id="service" name="service" class="form-input h-10">
          <option value="">Выберите услугу</option>
          <option
            v-for="service in services"
            :key="service.id"
            :value="service.id"
            :selected="service.id === preSelectedService"
          >
            {{ service.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="phone" class="form-label"
          >Телефон <span class="text-red-500">*</span></label
        >
        <input
          type="tel"
          id="phone"
          name="phone"
          class="form-input h-10"
          placeholder="+7 (999) 123-45-67"
          required
        />
      </div>

      <div class="form-group">
        <label for="email" class="form-label"
          >Email <span class="text-red-500">*</span></label
        >
        <input
          type="email"
          id="email"
          name="email"
          class="form-input h-10"
          placeholder="example@company.com"
          required
        />
      </div>

      <div class="form-group">
        <label for="message" class="form-label">Сообщение</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          class="form-input"
          placeholder="Расскажите о вашем проекте или задайте вопрос"
        ></textarea>
      </div>

      <div class="form-group">
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="privacy"
              type="checkbox"
              name="privacy"
              class="appearance-none h-4 w-4 bg-gray-100 border border-gray-300 rounded checked:bg-primary-600 checked:appearance-auto checked:border-primary-600 hover:bg-gray-200 custom-checkbox"
              required
            />
          </div>
          <div class="ml-3 text-sm text-start">
            <label for="privacy" class="text-gray-600">
              Я согласен на обработку персональных данных согласно
              <router-link
                to="/privacy"
                class="text-primary-600 hover:underline"
                >политике конфиденциальности</router-link
              >
            </label>
          </div>
        </div>
      </div>

      <div>
        <button type="submit" class="btn btn-primary w-full">
          {{ submitButtonText }}
        </button>
      </div>
    </form>

    <!-- Успешное сообщение будет показано после перенаправления -->
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Оставить заявку',
  },
  description: {
    type: String,
    default:
      'Заполните форму, и мы свяжемся с вами для обсуждения вашего проекта',
  },
  submitButtonText: {
    type: String,
    default: 'Отправить заявку',
  },
  service: {
    type: String,
    default: '',
  },
  services: {
    type: Array,
    default: () => [],
  },
});

// Используем для предварительного выбора услуги из пропса
const preSelectedService = computed(() => props.service);
</script>

<style scoped>
.form-input {
  transition: all 0.2s ease-in-out;
  color: black; /* Исправлен цвет текста для лучшей видимости */
  background: #fff;
}

.form-input:focus {
  transform: translateY(-1px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Добавлены стили для select и textarea для согласованности */
select.form-input,
textarea.form-input {
  appearance: auto;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  color: black;
  font-size: 1rem;
  line-height: 1.5;
}

/* Стили для чекбокса */
input[type='checkbox'] {
  cursor: pointer;
}

/* Стили для метки чекбокса */
input[type='checkbox'] + div label {
  cursor: pointer;
}

.contact-form {
  background: rgb(243 244 246);
}
</style>
