<template>
  <div class="contact-form bg-white rounded-lg shadow-md p-6 md:p-8">
    <h3 class="text-2xl font-bold mb-4">{{ title }}</h3>
    <p class="text-gray-600 mb-6">{{ description }}</p>

    <form @submit.prevent="submitFormWithTracking" class="space-y-4">
      <!-- Поле-ловушка для ботов (скрытое) -->
      <div style="display: none">
        <input
          type="text"
          name="honeypot"
          v-model="form.honeypot"
          autocomplete="off"
        />
      </div>

      <div class="form-group">
        <label for="name" class="form-label"
          >Имя <span class="text-red-500">*</span></label
        >
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

      <!-- Выпадающий список с услугами -->
      <div class="form-group" v-if="services && services.length">
        <label for="service" class="form-label">Интересующая услуга</label>
        <select id="service" v-model="form.service" class="form-input">
          <option value="">Выберите услугу</option>
          <option
            v-for="service in services"
            :key="service.id"
            :value="service.id"
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
          v-model="form.phone"
          class="form-input"
          :class="{ 'border-red-500': errors.phone }"
          placeholder="+7 (999) 123-45-67"
        />
        <span v-if="errors.phone" class="form-error">{{ errors.phone }}</span>
      </div>

      <div class="form-group">
        <label for="email" class="form-label"
          >Email <span class="text-red-500">*</span></label
        >
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
              <router-link
                to="/privacy"
                class="text-primary-600 hover:underline"
                >политике конфиденциальности</router-link
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

    <!-- Сообщение об успешной отправке -->
    <div
      v-if="formSubmitted"
      class="success-message mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mx-auto mb-2 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <p class="font-medium">Спасибо за обращение!</p>
      <p>Мы свяжемся с вами в ближайшее время.</p>
    </div>

    <!-- Сообщение об ошибке -->
    <div
      v-if="submitError"
      class="error-message mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mx-auto mb-2 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <p class="font-medium">Произошла ошибка при отправке формы</p>
      <p>Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
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
  services: {
    type: Array,
    default: () => [],
  },
});

// Используем композабл для логики формы
const { form, errors, isSubmitting, formSubmitted, submitError, submitForm } =
  useContactForm(props.service);

// Если передан пропс service, устанавливаем его как начальное значение
watch(
  () => props.service,
  (newService) => {
    if (newService) {
      form.service = newService;
    }
  },
  { immediate: true }
);

// Обертка для отправки формы с отслеживанием конверсии
const submitFormWithTracking = async () => {
  const result = await submitForm();

  // Если нужна дополнительная логика после отправки
  if (result && result.success) {
    // Здесь можно добавить дополнительные действия после успешной отправки
  }

  return result;
};
</script>

<style scoped>
.success-message,
.error-message {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.form-input {
  transition: all 0.2s ease-in-out;
  color: #fff;
}

.form-input:focus {
  transform: translateY(-1px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
