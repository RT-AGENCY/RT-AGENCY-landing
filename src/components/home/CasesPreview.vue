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
          class="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:-translate-y-2 duration-300 flex flex-col"
        >
          <!-- Изображение кейса (заглушка) -->
          <div class="aspect-video bg-gray-100 relative">
            <div
              class="absolute inset-0 flex items-center justify-center text-gray-400"
            >
              <img v-if="caseItem.img" :src="caseItem.img" alt="case image." class="case-image" loading="lazy"/>
              <svg
                v-else
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

          <div class="p-6 text-start flex-1 flex flex-col">
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
                <span class="text-sm">{{ result }}</span>
              </div>
            </div>

            <!-- Кнопка "Подробнее" -->
            <!-- <router-link
              :to="`/cases/${caseItem.slug}`"
              class="inline-flex items-end text-primary-600 font-medium hover:text-primary-700 flex-1"
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
            </router-link> -->
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
import nikeImg from '@/assets/images/cases/nike.webp'
import evermodImg from '@/assets/images/cases/Evermod.webp'
import mszImg from '@/assets/images/cases/msz.webp'


const cases = [
  {
    title: 'Мультиканальная рекламная кампания для Nike',
    description:
      'Комплексное продвижение в ВКонтакте, Facebook, Instagram, Яндекс.Директ и Google Ads для увеличения регистраций на мероприятия',
    slug: 'nike-multichannel-campaign',
    category: 'Мультиканальный маркетинг',
    img: nikeImg,
    results: [
      '+62% регистраций на брендовые мероприятия',
      'ROAS 4.1 (возврат на вложенные средства)',
      'Снижение стоимости заявки на 24%',
      'Рост брендовых запросов на 36%',
      'Более 1 000 000 органических охватов',
    ],
  },
  {
    title: 'Оптимизация рекламных кампаний для модульных домов Evermod',
    description:
      'Структурирование международных рекламных кампаний и адаптация под различные европейские рынки',
    slug: 'evermod-international-campaigns',
    category: 'Контекстная реклама',
    img: evermodImg,
    results: [
      'Рост количества лидов с 5 до 25-40 в месяц',
      'Снижение стоимости привлечения клиента до €28-€40',
      'Успешный выход на 6 европейских рынков',
      'Эффективная адаптация рекламных материалов под разные страны',
      'Внедрение динамических объявлений и ремаркетинга',
    ],
  },
  {
    title: 'Бренд-кампания для проекта «Москва Столица Здоровья»',
    description:
      'Комплексное продвижение городской инициативы в Яндекс.Директ и ВКонтакте для повышения узнаваемости программы здравоохранения',
    slug: 'moscow-health-capital-campaign',
    category: 'Мультиканальный маркетинг',
    img: mszImg,
    results: [
      'Охват более 5 млн уникальных пользователей',
      'Рост брендовых запросов на 44%',
      'Увеличение переходов на сайт проекта на 37%',
      'Прирост аудитории в социальных сетях на 8000+ подписчиков',
      'CTR в РСЯ 0.56% (выше среднего для бренд-кампаний)',
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
    'Мультиканальный маркетинг': 'bg-indigo-100 text-indigo-800',
  };

  return categories[category] || 'bg-gray-100 text-gray-800';
};
</script>

<style scoped>
.case-image {
  max-height: 100%;
  width: 100%;
}

</style>
