<template>
  <div class="contact-form bg-white rounded-lg shadow-md p-6 md:p-8">
    <h3 class="text-2xl font-bold mb-4">{{ title }}</h3>
    <p class="text-gray-600 mb-6">{{ description }}</p>

    <form @submit.prevent="submitForm" class="space-y-4">
      <div class="form-group">
        <label for="name" class="form-label">Имя</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          class="form-input"
          :class="{ 'border-red-500': errors.name }"
          placeholder="Иван Иванов"
        />
        <span v-if="errors.name" class="form-error">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label for="company" class="form-label">Компания</label>
        <input
          type="text"
          id="company"
          v-model="form.company"
          class="form-input"
          placeholder="ООО Рога и Копыта"
        />
      </div>

      <div class="form-group">
        <label for="phone" class="form-label">Телефон</label>
        <input
          type="tel"
          id="phone"
          v-model="form.phone"
          class="form-input"
          :class="{ 'border-red-500': errors.phone }"
          placeholder="+7 (999) 123-45-67"
        />
        <span v-if="errors.phone" class="form-error">{{ errors.phone }}</span>
      </div>

      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="form-input"
          :class="{ 'border-red-500': errors.email }"
          placeholder="example@company.com"
        />
        <span v-if="errors.email" class="form-error">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="message" class="form-label">Сообщение</label>
        <textarea
          id="message"
          v-model="form.message"
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
              v-model="form.privacy"
              class="h-4 w-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
              :class="{ 'border-red-500': errors.privacy }"
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="privacy" class="text-gray-600">
              Я согласен на обработку персональных данных согласно
              <a href="/privacy" class="text-primary-600 hover:underline"
                >политике конфиденциальности</a
              >
            </label>
            <span v-if="errors.privacy" class="form-error block">{{
              errors.privacy
            }}</span>
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="btn btn-primary w-full"
          :disabled="isSubmitting"
        >
          <span v-if="isSubmitting" class="inline-flex items-center">
            <svg
              class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Отправка...
          </span>
          <span v-else>{{ submitButtonText }}</span>
        </button>
      </div>
    </form>

    <div
      v-if="formSubmitted"
      class="success-message mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
    >
      Спасибо за обращение! Мы свяжемся с вами в ближайшее время.
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useContactForm } from '@/composables/useContactForm';

// Входные параметры компонента
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
});

// Используем композабл для логики формы
const { form, errors, isSubmitting, formSubmitted, submitForm } =
  useContactForm(props.service);
</script>

<style scoped>
.success-message {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
