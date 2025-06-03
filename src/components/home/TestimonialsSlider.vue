<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-2xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Что говорят о нас наши клиенты
        </p>
      </div>

      <!-- Слайдер с отзывами -->
      <div class="max-w-4xl mx-auto">
        <swiper
          :spaceBetween="30"
          :centeredSlides="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          :modules="modules"
          class="testimonials-swiper"
        >
          <swiper-slide
            v-for="(testimonial, index) in testimonials"
            :key="index"
          >
            <div class="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
              <div class="flex flex-row items-start md:items-center gap-4 mb-4">
                <div class="flex-shrink-0">
                  <!-- Аватар клиента -->
                  <div
                    class="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xl font-bold"
                  >
                    {{ testimonial.name.charAt(0) }}
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-bold">{{ testimonial.name }}</h3>
                  <p class="text-gray-600">
                    {{ testimonial.position }}, {{ testimonial.company }}
                  </p>
                </div>
              </div>
              <!-- Рейтинг -->

              <!-- <div class="mb-4">
                <div class="flex">
                  <svg
                    v-for="star in 5"
                    :key="star"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    :class="
                      star <= testimonial.rating
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
              </div> -->

              <p class="text-gray-700 mb-4 italic">"{{ testimonial.text }}"</p>

              <div>
                <p class="text-gray-500 text-sm">{{ testimonial.date }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Данные с отзывами
const testimonials = [
  {
    name: 'Иван Петров',
    position: 'Директор по маркетингу',
    company: 'ООО "Технологии"',
    rating: 5,
    text: 'Благодаря RT-AGENCY мы смогли снизить стоимость привлечения клиента на 37% и увеличить конверсию сайта почти в 2 раза. Отличная работа и постоянное сопровождение!',
    date: 'Апрель 2025',
  },
  {
    name: 'Анна Соколова',
    position: 'Руководитель отдела продаж',
    company: 'Компания "СтройДом"',
    rating: 5,
    text: 'Сотрудничаем с агентством более 3 лет. За это время они помогли нам выстроить эффективную воронку продаж через интернет. Рекомендую их за профессионализм и ориентацию на результат.',
    date: 'Март 2025',
  },
  {
    name: 'Максим Иванов',
    position: 'Владелец',
    company: 'Сеть магазинов "МебельПлюс"',
    rating: 4,
    text: 'Обратились в агентство для продвижения нашего интернет-магазина. Результаты превзошли ожидания. Особенно отмечу аналитический подход и прозрачную отчетность.',
    date: 'Февраль 2025',
  },
  {
    name: 'Елена Козлова',
    position: 'CEO',
    company: 'ООО "ФинТрейд"',
    rating: 5,
    text: 'Специалисты RT-AGENCY помогли нам с запуском нового направления. Четко выстроенная стратегия, креативные решения и постоянная оптимизация рекламных кампаний принесли отличные результаты.',
    date: 'Январь 2025',
  },
];

// Определение модулей для swiper
const modules = [Autoplay, Pagination, Navigation];

import { ref, onMounted, onBeforeUnmount } from 'vue';

// Текущий слайд
const currentSlide = ref(0);
// Флаг для блокировки кнопок во время перехода между слайдами
const isTransitioning = ref(false);
// Интервал для автоматического перелистывания слайдов
let autoplayInterval = null;

// Функция перехода к предыдущему слайду
const prevSlide = () => {
  if (isTransitioning.value) return;

  isTransitioning.value = true;
  currentSlide.value =
    (currentSlide.value - 1 + testimonials.length) % testimonials.length;

  setTimeout(() => {
    isTransitioning.value = false;
  }, 500); // Соответствует duration в CSS-переходе
};

// Функция перехода к следующему слайду
const nextSlide = () => {
  if (isTransitioning.value) return;

  isTransitioning.value = true;
  currentSlide.value = (currentSlide.value + 1) % testimonials.length;

  setTimeout(() => {
    isTransitioning.value = false;
  }, 500); // Соответствует duration в CSS-переходе
};

// Функция перехода к конкретному слайду
const goToSlide = (index) => {
  if (isTransitioning.value || currentSlide.value === index) return;

  isTransitioning.value = true;
  currentSlide.value = index;

  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
};

// Запуск автоматического перелистывания слайдов
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000); // Интервал между автоматическими переходами (5 секунд)
};

// Остановка автоматического перелистывания
const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
};

// Инициализация компонента
onMounted(() => {
  startAutoplay();
});

// Очистка перед уничтожением компонента
onBeforeUnmount(() => {
  stopAutoplay();
});
</script>

<style scoped>
.testimonials-slider {
  margin: 0 auto;
  max-width: 1000px;
}

/* Добавьте дополнительные стили по необходимости */

.testimonials-swiper {
  width: 100%;
  padding-bottom: 50px; /* Место для пагинации */
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background-color: #cbd5e0;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #4299e1;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: #4299e1;
}

:deep(.swiper-button-prev:after),
:deep(.swiper-button-next:after) {
  font-size: 24px;
}

@media (max-width: 768px) {
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    display: none;
  }
}
</style>
