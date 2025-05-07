<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Наши кейсы</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Реальные результаты для наших клиентов
        </p>
      </div>

      <!-- Карточки кейсов -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(caseItem, index) in cases"
          :key="index"
          class="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:-translate-y-2 duration-300"
        >
          <!-- Изображение кейса (заглушка) -->
          <div class="aspect-video bg-gray-100 relative">
            <div
              class="absolute inset-0 flex items-center justify-center text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <div class="p-6">
            <!-- Категория кейса -->
            <div class="mb-2">
              <span
                class="inline-block px-3 py-1 text-xs font-semibold rounded-full"
                :class="getTagClass(caseItem.category)"
              >
                {{ caseItem.category }}
              </span>
            </div>

            <!-- Заголовок кейса -->
            <h3 class="text-xl font-bold mb-2">{{ caseItem.title }}</h3>

            <!-- Краткое описание -->
            <p class="text-gray-600 mb-4">{{ caseItem.description }}</p>

            <!-- Ключевые результаты -->
            <div class="mb-4 space-y-2">
              <div
                v-for="(result, resultIndex) in caseItem.results"
                :key="resultIndex"
                class="flex items-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>{{ result }}</span>
              </div>
            </div>

            <!-- Кнопка "Подробнее" -->
            <router-link
              :to="`/cases/${caseItem.slug}`"
              class="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
            >
              Подробнее
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Кнопка "Все кейсы" -->
      <div class="text-center mt-12">
        <router-link to="/cases" class="btn btn-primary hover:text-white">
          Все кейсы
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// Примеры кейсов
const cases = [
  {
    title: 'Увеличение ROI на 245% для интернет-магазина мебели',
    description:
      'Оптимизация рекламных кампаний в Яндекс.Директ и аналитика пользовательского поведения',
    slug: 'furniture-store-roi-increase',
    category: 'Контекстная реклама',
    results: [
      '+245% ROI за 3 месяца',
      'Снижение стоимости заказа на 37%',
      'Увеличение конверсии сайта в 2 раза',
    ],
  },
  {
    title: 'Комплексное SEO-продвижение для строительной компании',
    description:
      'Вывод сайта в топ-3 по высококонкурентным запросам в Яндекс и Google',
    slug: 'construction-company-seo',
    category: 'SEO',
    results: [
      'Рост органического трафика на 310%',
      '78 запросов в ТОП-3 Google',
      'Снижение стоимости лида в 2,5 раза',
    ],
  },
  {
    title: 'Таргетированная реклама для онлайн-школы',
    description:
      'Запуск таргетированной рекламы в ВКонтакте и Telegram Ads с высокой конверсией',
    slug: 'online-school-targeting',
    category: 'Таргетированная реклама',
    results: [
      'Привлечено более 500 студентов за 2 месяца',
      'Стоимость лида в 2 раза ниже рынка',
      'ROAS 380%',
    ],
  },
];

// Функция определения цвета тега категории
const getTagClass = (category) => {
  const categories = {
    'Контекстная реклама': 'bg-blue-100 text-blue-800',
    SEO: 'bg-green-100 text-green-800',
    'Таргетированная реклама': 'bg-purple-100 text-purple-800',
    'Веб-аналитика': 'bg-orange-100 text-orange-800',
    CRO: 'bg-red-100 text-red-800',
  };

  return categories[category] || 'bg-gray-100 text-gray-800';
};
</script>
