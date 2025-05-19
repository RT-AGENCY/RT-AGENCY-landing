<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Наша экспертиза</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          RT Agency — маркетинговое агентство полного цикла, предоставляющее
          эффективные digital-решения для бизнеса в любой нише
        </p>
        <p class="text-primary-600 font-medium text-xl mt-4">
          Мы создаём результат там, где другие просто создают контент
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(industry, index) in industries"
          :key="index"
          class="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
        >
          <div class="flex items-center mb-4">
            <div class="bg-primary-100 text-primary-600 p-3 rounded-full mr-4">
              <component :is="industry.icon" class="h-6 w-6" />
            </div>
            <h3 class="text-base sm:text-lg font-bold text-left">{{ industry.name }}</h3>
          </div>
          <p class="text-gray-600">{{ industry.description }}</p>
        </div>
      </div>

      <div class="text-center mt-10">
        <p class="text-lg font-medium mb-6">
          Мы работаем с лидерами рынка — от недвижимости до высоких технологий
        </p>
        <router-link to="/cases" class="btn btn-outline hover:text-white hover:bg-primary-700">
          Посмотреть кейсы
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue';

// Иконки индустрий
const HomeIcon = (props) =>
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
        d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      }),
    ]
  );

const MedicineIcon = (props) =>
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
        d: 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z',
      }),
    ]
  );

const EducationIcon = (props) =>
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
        d: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      }),
    ]
  );

const FactoryIcon = (props) =>
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
        d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      }),
    ]
  );

const FinanceIcon = (props) =>
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
        d: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      }),
    ]
  );

const RetailIcon = (props) =>
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
        d: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
      }),
    ]
  );

// Данные об индустриях
const industries = [
  {
    name: 'Недвижимость',
    description:
      'Продажа и аренда домов, квартир, участков и коммерческой недвижимости',
    icon: HomeIcon,
  },
  {
    name: 'Медицина и фармацевтика',
    description:
      'Клиники, лаборатории, медицинские центры и фармацевтические компании',
    icon: MedicineIcon,
  },
  {
    name: 'Онлайн-образование',
    description: 'Образовательные платформы, курсы, тренинги и вебинары',
    icon: EducationIcon,
  },
  {
    name: 'Производство',
    description:
      'Промышленное производство, заводы и фабрики различных направлений',
    icon: FactoryIcon,
  },
  {
    name: 'Финансы и банки',
    description: 'Банковские услуги, кредитование, финансовые консультации',
    icon: FinanceIcon,
  },
  {
    name: 'Ритейл и технологии',
    description: 'Интернет-магазины, маркетплейсы и технологические компании',
    icon: RetailIcon,
  },
];
</script>
