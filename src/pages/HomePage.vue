<template>
  <div>
    <HeroSection />
    <NicheSpecialization />
    <ServicesPreview />
    <StatisticsBlock />
    <CasesPreview />
    <TestimonialsSlider />
    <ClientsLogos />

    <!-- Секция с призывом к действию -->
    <section class="py-16 bg-primary-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="bg-white shadow-xl rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Готовы увеличить продажи?
          </h2>
          <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для бесплатной консультации. Мы проанализируем ваш
            бизнес и предложим стратегию роста.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <router-link
              to="/contacts"
              class="btn btn-primary hover:text-white"
            >
              Получить консультацию
            </router-link>
            <!-- <a href="tel:+79991234567" class="btn btn-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Позвонить нам
            </a> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useMeta } from '@/composables/useMeta';
import HeroSection from '@/components/home/HeroSection.vue';
import ServicesPreview from '@/components/home/ServicesPreview.vue';
import StatisticsBlock from '@/components/home/StatisticsBlock.vue';
import CasesPreview from '@/components/home/CasesPreview.vue';
import TestimonialsSlider from '@/components/home/TestimonialsSlider.vue';
import ClientsLogos from '@/components/home/ClientsLogos.vue';
import NicheSpecialization from '../components/home/NicheSpecialization.vue';

// Мета-теги для SEO
useMeta({
  meta: [
    {
      name: 'keywords',
      content:
        'performance маркетинг, контекстная реклама, SEO, оптимизация конверсий, Москва',
    },
    { name: 'author', content: 'RT-AGENCY' },
    { 'http-equiv': 'content-language', content: 'ru' },
    { name: 'robots', content: 'index, follow' },
  ],
  link: [
    { rel: 'alternate', href: 'https://rt-ads.ru/', hreflang: 'ru' },
    { rel: 'canonical', href: 'https://rt-ads.ru/' },
  ],
  title: 'RT-AGENCY | Performance-маркетинг с гарантией результата',
  description:
    'Увеличиваем продажи с помощью контекстной и таргетированной рекламы с ROI до 420%. 150+ клиентов, 12 лет опыта. Москва и вся Россия.',
  ogType: 'website',
  ogImage: 'https://rt-ads.ru/logo.svg',
  ogUrl: 'https://rt-ads.ru/',
  ogSiteName: 'RT-AGENCY',
  twitterCard: 'summary_large_image',
  // Schema.org разметка для локального бизнеса
  schema: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'RT-AGENCY',
    description:
      'Performance-маркетинговое агентство, специализирующееся на контекстной и таргетированной рекламе, SEO и оптимизации конверсий.',
    logo: 'https://rt-ads.ru/logo.svg',
    url: 'https://rt-ads.ru',
    email: 'hello@rt-agency.ru',
    priceRange: '₽₽',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Примерная, д. 1', // добавьте реальный адрес
      addressLocality: 'Москва',
      postalCode: '123456', // добавьте реальный почтовый код
      addressCountry: 'RU',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    }
  },
});

onMounted(() => {
  // Дополнительные действия при монтировании компонента
});
</script>
