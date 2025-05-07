<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Заголовок секции -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Помогаем бизнесу увеличивать продажи с помощью комплексного
          digital-маркетинга
        </p>
      </div>

      <!-- Карточки услуг -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.id"
          class="card hover:shadow-lg transition-all duration-300 group"
        >
          <div class="mb-4">
            <div
              class="p-3 rounded-full bg-primary-100 inline-block text-primary-600"
            >
              <component :is="service.icon" class="h-8 w-8" />
            </div>
          </div>

          <h3
            class="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors"
          >
            {{ service.title }}
          </h3>

          <p class="text-gray-600 mb-4">
            {{ service.description }}
          </p>

          <router-link
            :to="`/services/${service.slug}`"
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
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </router-link>
        </div>
      </div>

      <!-- Кнопка "Все услуги" -->
      <div class="text-center mt-12">
        <router-link to="/services" class="btn btn-primary">
          Все услуги
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';

// Иконки услуг (компоненты SVG)
const IconSearch = (props) =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      'stroke-width': 2,
      ...props,
    },
    [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      }),
    ]
  );

const IconTarget = (props) =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      'stroke-width': 2,
      ...props,
    },
    [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      }),
    ]
  );

const IconChart = (props) =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      'stroke-width': 2,
      ...props,
    },
    [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      }),
    ]
  );

const IconSeo = (props) =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      'stroke-width': 2,
      ...props,
    },
    [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14',
      }),
    ]
  );

const IconGrowth = (props) =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      'stroke-width': 2,
      ...props,
    },
    [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      }),
    ]
  );

const IconStrategy = (props) =>
  h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor',
      'stroke-width': 2,
      ...props,
    },
    [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        d: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2',
      }),
    ]
  );

// Данные услуг
const services = [
  {
    id: 1,
    title: 'Контекстная реклама',
    description:
      'Настраиваем эффективные рекламные кампании в Яндекс.Директ и Google Ads для привлечения клиентов, которые уже ищут ваши услуги.',
    slug: 'context-ads',
    icon: IconSearch,
  },
  {
    id: 2,
    title: 'Таргетированная реклама',
    description:
      'Создаем рекламу в социальных сетях VK, myTarget и Telegram для точного попадания в вашу целевую аудиторию.',
    slug: 'targeted-ads',
    icon: IconTarget,
  },
  {
    id: 3,
    title: 'SEO-продвижение',
    description:
      'Выводим ваш сайт в топ поисковой выдачи Яндекс и Google, увеличивая органический трафик и снижая стоимость привлечения клиентов.',
    slug: 'seo',
    icon: IconSeo,
  },
  {
    id: 4,
    title: 'Веб-аналитика',
    description:
      'Внедряем системы аналитики и настраиваем отслеживание конверсий для измерения эффективности маркетинговых кампаний.',
    slug: 'web-analytics',
    icon: IconChart,
  },
  {
    id: 5,
    title: 'Оптимизация конверсий',
    description:
      'Увеличиваем процент посетителей, совершающих целевые действия на сайте, с помощью A/B-тестов и анализа поведения пользователей.',
    slug: 'cro',
    icon: IconGrowth,
  },
  {
    id: 6,
    title: 'Digital-стратегии',
    description:
      'Разрабатываем комплексную стратегию digital-маркетинга и медиапланирование для достижения бизнес-целей.',
    slug: 'digital-strategy',
    icon: IconStrategy,
  },
];
</script>
