<template>
  <div class="cases-page">
    <!-- Hero Section -->
    <section class="bg-primary-700 text-white mt-16 py-10 md:mt-0 md:py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl text-left">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">Наши кейсы</h1>
          <p class="text-xl opacity-90">
            Изучите наши успешные проекты и узнайте, какие результаты мы
            достигаем для клиентов
          </p>
        </div>
      </div>
    </section>

    <!-- Filters Section -->
    <section class="py-8 bg-white border-b">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-col md:flex-row gap-4 items-stretch md:items-center"
        >
          <!-- Search -->
          <div class="flex-1 md:max-w-md">
            <div class="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Поиск по кейсам..."
                class="case-input w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <!-- Service Filter -->
          <div class="flex-shrink-0">
            <select
              v-model="selectedService"
              aria-label="Все услуги"
              class="case-input w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Все услуги</option>
              <option
                v-for="service in services"
                :key="service.value"
                :value="service.value"
              >
                {{ service.label }}
              </option>
            </select>
          </div>

          <!-- Industry Filter -->
          <div class="flex-shrink-0">
            <select
              v-model="selectedIndustry"
              aria-label="Все ниши"
              class="case-input w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Все ниши</option>
              <option
                v-for="industry in industries"
                :key="industry.value"
                :value="industry.value"
              >
                {{ industry.label }}
              </option>
            </select>
          </div>

          <!-- Sort -->
          <div class="flex-shrink-0">
            <select
              v-model="sortBy"
              aria-label="Сортировка"
              class="case-input w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="date">По дате (новые)</option>
              <option value="roi">По ROI</option>
              <option value="revenue">По росту выручки</option>
            </select>
          </div>
        </div>

        <!-- Active Filters -->
        <div v-if="hasActiveFilters" class="mt-4 flex flex-wrap gap-2">
          <span
            v-if="selectedService"
            class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800"
          >
            {{ getServiceLabel(selectedService) }}
            <button
              @click="clearServiceFilter"
              class="ml-2 text-primary-600 hover:text-primary-800"
            >
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </span>
          <span
            v-if="selectedIndustry"
            class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800"
          >
            {{ getIndustryLabel(selectedIndustry) }}
            <button
              @click="clearIndustryFilter"
              class="ml-2 text-primary-600 hover:text-primary-800"
            >
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </span>
          <span
            v-if="searchQuery"
            class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800"
          >
            "{{ searchQuery }}"
            <button
              @click="clearSearchFilter"
              class="ml-2 text-primary-600 hover:text-primary-800"
            >
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </span>
          <button
            @click="clearAllFilters"
            class="text-sm text-primary-600 hover:text-primary-800 ml-2"
          >
            Очистить все
          </button>
        </div>

        <!-- Results Count -->
        <div class="mt-4 text-sm text-gray-600">
          Найдено кейсов:
          <span class="font-medium">{{ filteredCases.length }}</span> из
          {{ allCases.length }}
        </div>
      </div>
    </section>

    <!-- Cases Grid -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          v-if="filteredCases.length > 0"
          class="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div
            v-for="(caseItem, index) in filteredCases"
            :key="caseItem.id"
            class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
          >
            <!-- Case Image -->
            <div class="aspect-video bg-gray-100 relative">
              <div v-if="caseItem.image" class="absolute inset-0">
                <img
                  :src="caseItem.image"
                  :alt="caseItem.title"
                  class="w-full h-full object-cover"
                  :fetchpriority="index < 2 ? 'high' : 'auto'"
                  :loading="index < 2 ? 'eager' : 'lazy'"
                />
              </div>
              <div
                v-else
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

            <!-- Case Content -->
            <div class="p-6 flex flex-col flex-1">
              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-3">
                <span
                  v-for="service in caseItem.services"
                  :key="service"
                  class="px-2 py-1 text-xs font-medium rounded bg-primary-100 text-primary-800"
                >
                  {{ getServiceLabel(service) }}
                </span>
                <span
                  class="px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-800"
                >
                  {{ getIndustryLabel(caseItem.industry) }}
                </span>
              </div>

              <!-- Title -->
              <h3 class="text-xl font-bold mb-2 text-start">
                {{ caseItem.title }}
              </h3>

              <!-- Company -->
              <p class="text-sm text-gray-600 mb-3">{{ caseItem.client }}</p>

              <!-- Description -->
              <p class="text-gray-700 mb-4 line-clamp-3 text-start">
                {{ caseItem.description }}
              </p>

              <!-- Key Results -->
              <div class="mb-4">
                <h4 class="text-sm font-medium text-gray-900 mb-2">
                  Ключевые результаты:
                </h4>
                <div class="grid grid-cols-2 gap-4">
                  <div
                    v-for="result in caseItem.keyResults"
                    :key="result.metric"
                    class="flex flex-col"
                  >
                    <span class="text-sm text-gray-500">{{
                      result.metric
                    }}</span>
                    <span
                      :class="[
                        'font-bold text-lg',
                        getResultColor(result.value),
                      ]"
                    >
                      {{ result.value }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results State -->
        <div v-else class="text-center py-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 mx-auto text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <h3 class="text-lg font-medium text-gray-900 mb-2">
            Ничего не найдено
          </h3>
          <p class="text-gray-500 mb-4">
            Попробуйте изменить критерии поиска или очистить фильтры
          </p>
          <button @click="clearAllFilters" class="btn btn-primary">
            Очистить фильтры
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="bg-white shadow-xl rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h4 class="text-3xl md:text-4xl font-bold mb-4">
            Хотите достичь таких же результатов?
          </h4>
          <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения вашего проекта. Мы проанализируем
            ваш бизнес и предложим эффективную стратегию продвижения.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <router-link
              to="/contacts"
              class="btn btn-primary hover:text-white"
            >
              Обсудить проект
            </router-link>
            <router-link to="/about" class="btn btn-outline">
              Узнать о нас больше
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMeta } from '@/composables/useMeta';

// Роутер и маршрут
const route = useRoute();
const router = useRouter();

import nikeImg from '@/assets/images/cases/nike.webp';
import evermodImg from '@/assets/images/cases/Evermod.webp';
import mszImg from '@/assets/images/cases/msz.webp';
import gatchinaImg from '@/assets/images/cases/gatchina.webp';
import vyritsaImg from '@/assets/images/cases/vyritsa.webp';
import holtsovImg from '@/assets/images/cases/holtsov.webp';
import prefabImg from '@/assets/images/cases/prefab.webp';
import gkb23Img from '@/assets/images/cases/gkb-23.webp';
import gkb24Img from '@/assets/images/cases/gkb-24.webp';
import techImg from '@/assets/images/cases/tech-nikol.webp';
import rostermImg from '@/assets/images/cases/rosterm.webp';
import siriusImg from '@/assets/images/cases/sirius.webp';
import skillboxImg from '@/assets/images/cases/skillbox.webp';

// Реактивные данные для фильтров
const searchQuery = ref('');
const selectedService = ref('');
const selectedIndustry = ref('');
const sortBy = ref('date');

// Флаг для предотвращения зацикливания при инициализации
const isInitialized = ref(false);

// Опции для фильтров
const services = [
  { value: 'context-ads', label: 'Контекстная реклама' },
  { value: 'targeted-ads', label: 'Таргетированная реклама' },
  { value: 'seo', label: 'SEO-продвижение' },
  { value: 'web-analytics', label: 'Веб-аналитика' },
  { value: 'cro', label: 'Оптимизация конверсий' },
  { value: 'digital-strategy', label: 'Digital-стратегии' },
  { value: 'complex', label: 'Комплексное продвижение' },
];

const industries = [
  { value: 'real-estate', label: 'Недвижимость' },
  { value: 'healthcare', label: 'Медицина и фармацевтика' },
  { value: 'education', label: 'Онлайн-образование' },
  { value: 'manufacturing', label: 'Производство' },
  { value: 'retail', label: 'Ритейл и технологии' },
];

const allCases = ref([
  {
    id: 1,
    slug: 'nike-multichannel-campaign',
    title: 'Мультиканальная рекламная кампания для Nike',
    client: 'Nike',
    description:
      'Комплексное продвижение в ВКонтакте, Facebook, Instagram, Яндекс.Директ и Google Ads для увеличения регистраций на брендовые мероприятия',
    services: ['context-ads', 'targeted-ads', 'complex'],
    industry: 'retail',
    image: nikeImg,
    keyResults: [
      { metric: 'Регистрации', value: '+62%' },
      { metric: 'ROAS', value: '4.1' },
      { metric: 'Стоимость заявки', value: '-24%' },
      { metric: 'Брендовые запросы', value: '+36%' },
    ],
    date: '2025-05-01',
    roi: 410,
    revenue: '+62%',
  },
  {
    id: 2,
    slug: 'gc-riviera-cottages',
    title: 'Увеличение продаж коттеджных поселков GC Riviera',
    client: 'GC Riviera — Гатчина',
    description:
      'Оптимизация контекстной рекламы для коттеджных поселков в Санкт-Петербурге и Ленинградской области',
    services: ['context-ads', 'web-analytics', 'cro'],
    industry: 'real-estate',
    image: gatchinaImg,
    keyResults: [
      { metric: 'CPL', value: '1200-1800₽' },
      { metric: 'Конверсия', value: '2.5-3.2%' },
      { metric: 'Целевой трафик', value: '85-90%' },
      { metric: 'Сегменты', value: '40+' },
    ],
    date: '2025-04-15',
    roi: 290,
    revenue: '+180%',
  },
  {
    id: 13,
    slug: 'skillbox-online-courses',
    title: 'Продвижение онлайн-курсов Skillbox через мультиканальную стратегию',
    client: 'Skillbox',
    description:
      'Комплексное продвижение онлайн-курсов по дизайну, программированию, маркетингу и аналитике через Яндекс.Директ и VK Ads для привлечения студентов по всей России',
    services: [
      'context-ads',
      'targeted-ads',
      'web-analytics',
      'cro',
      'complex',
    ],
    industry: 'education',
    image: skillboxImg,
    keyResults: [
      { metric: 'Лиды за 45 дней', value: '2300+' },
      { metric: 'CPL', value: '1100₽' },
      { metric: 'Конверсия', value: '13-17%' },
      { metric: 'CTR на поиске', value: '7.2%' },
    ],
    date: '2024-06-15',
    roi: 310,
    revenue: '+280%',
  },
  {
    id: 3,
    slug: 'holtsov-house-modular',
    title: 'Продвижение модульных домов Holtsov House',
    client: 'Holtsov House',
    description:
      'Реструктуризация контекстной рекламы с полной сменой стратегии и проведением A/B тестов',
    services: ['context-ads', 'cro'],
    industry: 'real-estate',
    image: holtsovImg,
    keyResults: [
      { metric: 'CTR', value: '3.6%' },
      { metric: 'CPL', value: '1000-1300₽' },
      { metric: 'Конверсия', value: '3.5-4.2%' },
      { metric: 'Рост лидов', value: '+280%' },
    ],
    date: '2025-03-25',
    roi: 380,
    revenue: '+280%',
  },

  // 4. Земельные участки - Славянка/Вырица
  {
    id: 4,
    slug: 'land-plots-leningrad',
    title: 'Оптимизация продаж земельных участков в Ленинградской области',
    client: 'GC Riviera (Славянка, Вырица)',
    description:
      'Сегментация кампаний и внедрение сквозной аналитики для земельных участков',
    services: ['context-ads', 'web-analytics'],
    industry: 'real-estate',
    image: vyritsaImg,
    keyResults: [
      { metric: 'CPL', value: '1100-1600₽' },
      { metric: 'Заявки', value: '+170%' },
      { metric: 'Bounce rate', value: '-28%' },
      { metric: 'Сквозная аналитика', value: '100%' },
    ],
    date: '2025-02-10',
    roi: 270,
    revenue: '+170%',
  },

  // 5. PrefabHome.eu - Каркасные дома (зарубеж)
  {
    id: 5,
    slug: 'prefabhome-eu-international',
    title: 'Международная кампания для каркасных домов в Европе',
    client: 'PrefabHome.eu',
    description:
      'Локализация рекламных кампаний под европейские рынки с культурной адаптацией',
    services: ['context-ads', 'digital-strategy'],
    industry: 'real-estate',
    image: prefabImg,
    keyResults: [
      { metric: 'CPL в €', value: '€35-€50' },
      { metric: 'CTR', value: '3.4%' },
      { metric: 'Bounce rate', value: '-35%' },
      { metric: 'Страны', value: '8' },
    ],
    date: '2025-01-20',
    roi: 420,
    revenue: '+250%',
  },

  // 6. Evermod.eu - Модульные дома (зарубеж)
  {
    id: 6,
    slug: 'evermod-eu-modular-homes',
    title: 'Структурирование кампаний модульных домов Evermod в Европе',
    client: 'Evermod.eu',
    description:
      'Оптимизация структуры рекламных кампаний по европейским странам с визуальной адаптацией',
    services: ['context-ads', 'targeted-ads'],
    industry: 'real-estate',
    image: evermodImg,
    keyResults: [
      { metric: 'CPL в €', value: '€28-€40' },
      { metric: 'Лиды/месяц', value: '25-40' },
      { metric: 'Страны', value: '6' },
      { metric: 'ROI', value: '320%' },
    ],
    date: '2024-12-15',
    roi: 320,
    revenue: '+650%',
  },

  // 7. ГКБ №23 - Плановые операции
  {
    id: 7,
    slug: 'hospital-23-operations',
    title: 'Увеличение потока на плановые операции в ГКБ №23',
    client: 'ГКБ №23 им. Давыдовского',
    description:
      'Привлечение пациентов на операции по желчному пузырю, грыже, сердцу и катаракте',
    services: ['context-ads', 'targeted-ads'],
    industry: 'healthcare',
    image: gkb23Img,
    keyResults: [
      { metric: 'CTR', value: '7.2%' },
      { metric: 'Конверсия', value: '10.8%' },
      { metric: 'CPL', value: '435₽' },
      { metric: 'Заявки', value: '1420' },
    ],
    date: '2024-11-30',
    roi: 280,
    revenue: '+85%',
  },

  // 8. ГКБ №24 - Эндоскопические процедуры
  {
    id: 8,
    slug: 'hospital-24-endoscopy',
    title: 'Рост записей на эндоскопические процедуры в ГКБ №24',
    client: 'ГКБ №24',
    description:
      'Увеличение количества записей на колоноскопию, гастроскопию и удаление полипов',
    services: ['context-ads', 'targeted-ads'],
    industry: 'healthcare',
    image: gkb24Img,
    keyResults: [
      { metric: 'CTR', value: '8.1%' },
      { metric: 'Конверсия', value: '12.6%' },
      { metric: 'CPL', value: '350₽' },
      { metric: 'Заявки', value: '1470' },
    ],
    date: '2024-11-15',
    roi: 320,
    revenue: '+95%',
  },

  // 9. МСЗ - Москва Столица Здоровья
  {
    id: 9,
    slug: 'moscow-health-capital-brand',
    title: 'Бренд-кампания для проекта «Москва Столица Здоровья»',
    client: 'Москва Столица Здоровья',
    description:
      'Комплексное продвижение городской инициативы для повышения узнаваемости программы здравоохранения',
    services: ['context-ads', 'targeted-ads', 'digital-strategy'],
    industry: 'healthcare',
    image: mszImg,
    keyResults: [
      { metric: 'Охват', value: '5M+' },
      { metric: 'Брендовые запросы', value: '+44%' },
      { metric: 'CTR в РСЯ', value: '0.56%' },
      { metric: 'Подписчики', value: '+8K' },
    ],
    date: '2024-10-25',
    roi: 275,
    revenue: '+44%',
  },
  {
    id: 10,
    slug: 'technonikol-roofing-materials',
    title:
      'Продвижение кровельных материалов ТехноНИКОЛЬ через мультиканальную стратегию',
    client: 'ТехноНИКОЛЬ',
    description:
      'Комплексное продвижение кровельных и теплоизоляционных материалов через Яндекс.Директ и VK Ads для привлечения частных клиентов и монтажников по всей России',
    services: ['context-ads', 'targeted-ads', 'web-analytics', 'complex'],
    industry: 'manufacturing',
    image: techImg,
    keyResults: [
      { metric: 'Заявки за 60 дней', value: '1850+' },
      { metric: 'CPL', value: '410₽' },
      { metric: 'Конверсия ЯД', value: '14%' },
      { metric: 'Конверсия VK', value: '28%' },
    ],
    date: '2024-09-20',
    roi: 285,
    revenue: '+245%',
  },
  {
    id: 11,
    slug: 'rosterm-engineering-systems',
    title:
      'Продвижение инженерных систем Ростерм через мультиканальную стратегию',
    client: 'Ростерм',
    description:
      'Комплексное продвижение пластиковых труб, фитингов и запорной арматуры через Яндекс.Директ и VK Ads для привлечения монтажников, дистрибьюторов и оптовых клиентов по всей России',
    services: ['context-ads', 'targeted-ads', 'web-analytics', 'complex'],
    industry: 'manufacturing',
    image: rostermImg,
    keyResults: [
      { metric: 'Лиды за 45 дней', value: '1320+' },
      { metric: 'CPL', value: '440₽' },
      { metric: 'Конверсия в лид', value: '12-16%' },
      { metric: 'CTR в РСЯ', value: '5.4%' },
    ],
    date: '2024-08-10',
    roi: 270,
    revenue: '+220%',
  },
  {
    id: 12,
    slug: 'sirius-outdoor-boilers',
    title: 'Продвижение энергонезависимых наружных котлов СИРИУС',
    client: 'СИРИУС',
    description:
      'Привлечение заявок на энергонезависимые газовые котлы через Яндекс.Директ с акцентом на регионы с холодным климатом и нестабильным электроснабжением',
    services: ['context-ads', 'web-analytics'],
    industry: 'manufacturing',
    image: siriusImg,
    keyResults: [
      { metric: 'Лиды за 30 дней', value: '870+' },
      { metric: 'CPL', value: '2500₽' },
      { metric: 'Конверсия', value: '17%' },
      { metric: 'CTR в РСЯ', value: '6.1%' },
    ],
    date: '2024-07-05',
    roi: 240,
    revenue: '+185%',
  },
]);

// Функции для обновления URL
const updateURL = () => {
  if (!isInitialized.value) return;

  const query = {};

  if (searchQuery.value) query.search = searchQuery.value;
  if (selectedService.value) query.service = selectedService.value;
  if (selectedIndustry.value) query.industry = selectedIndustry.value;
  if (sortBy.value !== 'date') query.sort = sortBy.value;

  // Обновляем URL без перезагрузки страницы
  router.replace({ query });
};

// Функция для инициализации фильтров из URL
const initializeFromURL = () => {
  const query = route.query;

  searchQuery.value = query.search || '';
  selectedService.value = query.service || '';
  selectedIndustry.value = query.industry || '';
  sortBy.value = query.sort || 'date';

  // Устанавливаем флаг после инициализации
  nextTick(() => {
    isInitialized.value = true;
  });
};

// Watchers для обновления URL при изменении фильтров
watch(searchQuery, updateURL);
watch(selectedService, updateURL);
watch(selectedIndustry, updateURL);
watch(sortBy, updateURL);

// Computed свойства
const filteredCases = computed(() => {
  let filtered = allCases.value;

  // Фильтр по поисковому запросу
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (caseItem) =>
        caseItem.title.toLowerCase().includes(query) ||
        caseItem.description.toLowerCase().includes(query) ||
        caseItem.client.toLowerCase().includes(query)
    );
  }

  // Фильтр по услуге
  if (selectedService.value) {
    filtered = filtered.filter((caseItem) =>
      caseItem.services.includes(selectedService.value)
    );
  }

  // Фильтр по отрасли
  if (selectedIndustry.value) {
    filtered = filtered.filter(
      (caseItem) => caseItem.industry === selectedIndustry.value
    );
  }

  // Сортировка
  if (sortBy.value === 'date') {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortBy.value === 'roi') {
    filtered.sort((a, b) => b.roi - a.roi);
  } else if (sortBy.value === 'revenue') {
    filtered.sort(
      (a, b) =>
        parseFloat(b.revenue.replace(/[^0-9]/g, '')) -
        parseFloat(a.revenue.replace(/[^0-9]/g, ''))
    );
  }

  return filtered;
});

const hasActiveFilters = computed(() => {
  return searchQuery.value || selectedService.value || selectedIndustry.value;
});

// Методы для очистки фильтров
const clearAllFilters = () => {
  searchQuery.value = '';
  selectedService.value = '';
  selectedIndustry.value = '';
  sortBy.value = 'date';
};

const clearSearchFilter = () => {
  searchQuery.value = '';
};

const clearServiceFilter = () => {
  selectedService.value = '';
};

const clearIndustryFilter = () => {
  selectedIndustry.value = '';
};

const getServiceLabel = (value) => {
  const service = services.find((s) => s.value === value);
  return service ? service.label : value;
};

const getIndustryLabel = (value) => {
  const industry = industries.find((i) => i.value === value);
  return industry ? industry.label : value;
};

const getResultColor = (value) => {
  if (value.startsWith('+')) {
    return 'text-green-600';
  } else if (value.startsWith('-')) {
    return 'text-red-600';
  }
  return 'text-gray-900';
};

// Мета-теги для SEO
useMeta({
  title: '9 Кейсов с ROI до 420% | Результаты работы RT-AGENCY',
  description:
    'Реальные результаты продвижения Nike, Сбербанк, Evermod: рост ROI до 420%, снижение CPL на 35%, увеличение конверсии в 2 раза. Кейсы с цифрами.',
  keywords:
    'кейсы маркетингового агентства, успешные примеры рекламы, результаты контекстной рекламы',
  ogImage: 'https://rt-ads.ru/logo.svg',
  link: [{ rel: 'canonical', href: 'https://rt-ads.ru/cases' }],
  ogType: 'website',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Кейсы RT-AGENCY',
    description: 'Успешные примеры работы агентства RT-AGENCY',
    url: 'https://rt-ads.ru/cases',
    hasPart: [
      // Добавить каждый кейс как Case Study
      {
        '@type': 'Case',
        headline: 'Мультиканальная кампания Nike',
        description: '+62% регистраций, ROI 410%',
        image: 'https://rt-ads.ru/images/cases/nike.webp',
        author: {
          '@type': 'Organization',
          name: 'RT-AGENCY',
        },
      },
    ],
  },
});

// Инициализация при монтировании
onMounted(() => {
  initializeFromURL();
});

// Отслеживание изменений в route для случаев программной навигации
watch(
  () => route.query,
  (newQuery) => {
    if (isInitialized.value) {
      // Обновляем фильтры только если query изменился извне
      const currentQuery = {
        search: searchQuery.value || undefined,
        service: selectedService.value || undefined,
        industry: selectedIndustry.value || undefined,
        sort: sortBy.value !== 'date' ? sortBy.value : undefined,
      };

      // Убираем undefined значения для сравнения
      Object.keys(currentQuery).forEach(
        (key) => currentQuery[key] === undefined && delete currentQuery[key]
      );

      // Сравниваем объекты
      const queryChanged =
        JSON.stringify(currentQuery) !== JSON.stringify(newQuery);

      if (queryChanged) {
        isInitialized.value = false;
        initializeFromURL();
      }
    }
  }
);
</script>

<style scoped>
/* Ограничение по количеству строк текста */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.case-input {
  background: beige;
  height: 42px;
}

/* Анимации для hover-эффектов */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* Дополнительные стили для фильтров */
.filter-transition {
  transition: all 0.3s ease;
}

/* Стили для мобильных устройств */
@media (max-width: 768px) {
  .cases-grid {
    grid-template-columns: 1fr;
  }
}
</style>
