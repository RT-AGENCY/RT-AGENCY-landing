<template>
  <div class="real-estate-landing">
    <!-- Hero Section -->
    <section
      class="hero-section bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-16 md:py-24"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Заголовок с УТП -->
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Реклама в Яндекс Директ, которая продает
            <span class="text-primary-300"
              >дома, квартиры и земельные участки</span
            >
          </h1>

          <!-- Подзаголовок -->
          <p class="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Мы настраиваем кампании так, чтобы ваши заявки обходились дешевле, а
            продажи росли быстрее. За 6 недель снижаем CPL с 3500₽ до 1200₽ и
            увеличиваем поток заявок в 2.5 раза.
          </p>

          <!-- Форма заявки #1 -->
          <div
            class="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl max-w-lg mx-auto"
          >
            <h3 class="text-xl font-bold mb-4">
              Получить план снижения CPL бесплатно
            </h3>

            <!-- Сообщения об успехе/ошибке -->
            <div v-if="submitSuccess" class="success-message mb-4">
              ✅ Заявка отправлена! Мы свяжемся с вами в течение 30 минут.
            </div>
            <div v-if="submitError" class="error-message mb-4">
              ❌ {{ submitError }}
            </div>

            <form @submit.prevent="submitForm" class="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                class="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                :class="{ 'form-input-error': submitError && !form.name }"
                v-model="form.name"
                :disabled="isSubmitting"
                required
              />
              <input
                type="tel"
                placeholder="Телефон"
                class="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                :class="{ 'form-input-error': submitError && !form.phone }"
                v-model="form.phone"
                @input="formatPhone"
                :disabled="isSubmitting"
                required
              />
              <input
                type="email"
                placeholder="Email (необязательно)"
                class="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                v-model="form.email"
                :disabled="isSubmitting"
              />
              <input
                type="text"
                placeholder="Ваш проект (квартиры/дома/участки)"
                class="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                v-model="form.project"
                :disabled="isSubmitting"
              />
              <button
                type="submit"
                class="w-full btn btn-secondary btn-lg"
                :class="{ 'btn-loading': isSubmitting }"
                :disabled="isSubmitting"
              >
                {{
                  isSubmitting ? 'Отправляем...' : 'Получить аудит бесплатно'
                }}
              </button>
            </form>
            <p class="text-sm text-gray-300 mt-3">
              Оставьте заявку, и мы подготовим аудит и план по запуску рекламы в
              Яндекс Директ именно для вашей ниши.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Что мы делаем -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
            Что мы делаем для недвижимости и строительства
          </h2>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-xl font-bold mb-4 text-primary-600">
                🏗️ Строим структуру кампаний
              </h3>
              <p class="text-gray-700">
                под конкретный продукт: квартиры в новостройках, коттеджные
                поселки, земельные участки, модульные и каркасные дома.
              </p>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-xl font-bold mb-4 text-primary-600">
                🎯 Адаптируем объявления
              </h3>
              <p class="text-gray-700">
                под аудиторию: инвесторы, семьи, молодые пары, покупатели
                загородной недвижимости.
              </p>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-xl font-bold mb-4 text-primary-600">
                🧪 Тестируем офферы и визуалы
              </h3>
              <p class="text-gray-700">
                ипотека с господдержкой, дом под ключ, рассрочка, быстрый въезд.
              </p>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-xl font-bold mb-4 text-primary-600">
                📊 Подключаем аналитику
              </h3>
              <p class="text-gray-700">
                отслеживание звонков, заявок и ROI, чтобы видеть результат в
                деньгах.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Результаты клиентов -->
    <section class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Результаты клиентов
        </h2>

        <!-- Новостройки -->
        <div class="mb-12">
          <h3 class="text-2xl font-bold mb-8 text-center text-primary-600">
            Россия — недвижимость
          </h3>
          <div class="grid md:grid-cols-3 gap-8">
            <div
              class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-500"
            >
              <h4 class="font-bold text-lg mb-3">
                Группа ПИК (Москва и область)
              </h4>
              <ul class="space-y-2 text-sm">
                <li>
                  CTR вырос с <span class="text-red-500">0.9%</span> до
                  <span class="text-green-600 font-bold">3.2%</span>
                </li>
                <li>
                  CPL снизился с
                  <span class="text-red-500">2 800–3 500 ₽</span> до
                  <span class="text-green-600 font-bold">950–1 200 ₽</span>
                </li>
                <li>
                  Конверсия выросла до
                  <span class="text-green-600 font-bold">4.1%</span>
                </li>
                <li>
                  <span class="text-green-600 font-bold">+230% лидов</span> за 6
                  недель
                </li>
              </ul>
            </div>

            <div
              class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-500"
            >
              <h4 class="font-bold text-lg mb-3">Абсолют Недвижимость</h4>
              <ul class="space-y-2 text-sm">
                <li>
                  CTR: с <span class="text-red-500">0.8%</span> до
                  <span class="text-green-600 font-bold">2.9%</span>
                </li>
                <li>
                  CPL: с <span class="text-red-500">3 500–4 200 ₽</span> до
                  <span class="text-green-600 font-bold">1 100–1 400 ₽</span>
                </li>
                <li>
                  Конверсия:
                  <span class="text-green-600 font-bold">3.2–4.0%</span>
                </li>
                <li>
                  <span class="text-green-600 font-bold">+260% лидов</span> за 2
                  месяца
                </li>
              </ul>
            </div>

            <div
              class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-500"
            >
              <h4 class="font-bold text-lg mb-3">Самолёт</h4>
              <ul class="space-y-2 text-sm">
                <li>
                  CTR: с <span class="text-red-500">1.0–1.3%</span> до
                  <span class="text-green-600 font-bold">3.4%</span>
                </li>
                <li>
                  CPL: с <span class="text-red-500">3 200–3 800 ₽</span> до
                  <span class="text-green-600 font-bold">1 100–1 500 ₽</span>
                </li>
                <li>
                  Конверсия: до
                  <span class="text-green-600 font-bold">4.3%</span>
                </li>
                <li>
                  <span class="text-green-600 font-bold">+270% заявок</span> за
                  6 недель
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Коттеджные поселки -->
        <div class="mb-12">
          <h3 class="text-2xl font-bold mb-8 text-center text-primary-600">
            Коттеджные посёлки и земельные участки
          </h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div
              class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500"
            >
              <h4 class="font-bold text-lg mb-3">GC Riviera (СПб и ЛО)</h4>
              <ul class="space-y-2 text-sm">
                <li>
                  CPL: с <span class="text-red-500">3 500–5 000 ₽</span> до
                  <span class="text-green-600 font-bold">1 200–1 800 ₽</span>
                </li>
                <li>
                  Конверсия: с <span class="text-red-500">&lt;1%</span> до
                  <span class="text-green-600 font-bold">2.5–3.2%</span>
                </li>
                <li>
                  Целевых заявок:
                  <span class="text-green-600 font-bold">85–90%</span>
                </li>
              </ul>
            </div>

            <div
              class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500"
            >
              <h4 class="font-bold text-lg mb-3">
                Славянка и Вырица (земельные участки)
              </h4>
              <ul class="space-y-2 text-sm">
                <li>
                  CPL: с <span class="text-red-500">4 000 ₽</span> до
                  <span class="text-green-600 font-bold">1 100–1 600 ₽</span>
                </li>
                <li>
                  Заявок стало
                  <span class="text-green-600 font-bold"
                    >в 2.7 раза больше</span
                  >
                </li>
                <li>Подключена сквозная аналитика, улучшен UX</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Модульные дома -->
        <div class="mb-12">
          <h3 class="text-2xl font-bold mb-8 text-center text-primary-600">
            Модульные и каркасные дома
          </h3>
          <div class="grid md:grid-cols-3 gap-8">
            <div
              class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500"
            >
              <h4 class="font-bold text-lg mb-3">Holtsov House</h4>
              <ul class="space-y-2 text-sm">
                <li>
                  CTR: с <span class="text-red-500">1.1%</span> до
                  <span class="text-green-600 font-bold">3.6%</span>
                </li>
                <li>
                  CPL: с <span class="text-red-500">4 000 ₽</span> до
                  <span class="text-green-600 font-bold">1 000–1 300 ₽</span>
                </li>
                <li>
                  Конверсия: до
                  <span class="text-green-600 font-bold">4.2%</span>
                </li>
                <li>
                  <span class="text-green-600 font-bold">+280% лидов</span> за 2
                  месяца
                </li>
              </ul>
            </div>

            <div
              class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500"
            >
              <h4 class="font-bold text-lg mb-3">
                PrefabHome.eu (Италия и Франция)
              </h4>
              <ul class="space-y-2 text-sm">
                <li>
                  CPL: с <span class="text-red-500">€80–€120</span> до
                  <span class="text-green-600 font-bold">€35–€50</span>
                </li>
                <li>
                  CTR: с <span class="text-red-500">0.9–1.2%</span> до
                  <span class="text-green-600 font-bold">3.4%</span>
                </li>
                <li>
                  Bounce rate: снижен с <span class="text-red-500">70%</span> до
                  <span class="text-green-600 font-bold">42%</span>
                </li>
              </ul>
            </div>

            <div
              class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500"
            >
              <h4 class="font-bold text-lg mb-3">
                Evermod.eu (6 стран Европы)
              </h4>
              <ul class="space-y-2 text-sm">
                <li>
                  CPL: <span class="text-green-600 font-bold">€28–€40</span>
                </li>
                <li>
                  Лидов:
                  <span class="text-green-600 font-bold">25–40 в месяц</span>
                </li>
                <li>
                  ROI: <span class="text-green-600 font-bold">+320%</span>
                </li>
                <li>Визуальные адаптации под каждую страну</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Форма заявки #2 -->
        <div class="text-center">
          <div class="bg-primary-50 p-8 rounded-2xl max-w-lg mx-auto">
            <h3 class="text-xl font-bold mb-4 text-primary-900">
              Хотите такие же результаты?
            </h3>

            <!-- Сообщения об успехе/ошибке -->
            <div v-if="submitSuccess" class="success-message mb-4">
              ✅ Заявка отправлена! Мы свяжемся с вами в течение 30 минут.
            </div>
            <div v-if="submitError" class="error-message mb-4">
              ❌ {{ submitError }}
            </div>

            <form @submit.prevent="submitForm" class="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                class="w-full px-4 py-3 rounded-lg border border-gray-300"
                :class="{ 'form-input-error': submitError && !form.name }"
                v-model="form.name"
                :disabled="isSubmitting"
                required
              />
              <input
                type="tel"
                placeholder="Телефон"
                class="w-full px-4 py-3 rounded-lg border border-gray-300"
                :class="{ 'form-input-error': submitError && !form.phone }"
                v-model="form.phone"
                @input="formatPhone"
                :disabled="isSubmitting"
                required
              />
              <button
                type="submit"
                class="w-full btn btn-primary btn-lg"
                :class="{ 'btn-loading': isSubmitting }"
                :disabled="isSubmitting"
              >
                {{
                  isSubmitting
                    ? 'Отправляем...'
                    : 'Получить стратегию бесплатно'
                }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Почему с нами выгодно -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Почему с нами выгодно
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div class="bg-white p-6 rounded-xl shadow-sm text-center">
            <div class="text-4xl mb-4">🎯</div>
            <h3 class="font-bold mb-3">Фокус на результат</h3>
            <p class="text-gray-600 text-sm">
              Мы делаем акцент на результат: снижаем CPL и увеличиваем поток
              заявок.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm text-center">
            <div class="text-4xl mb-4">🏗️</div>
            <h3 class="font-bold mb-3">Сложные ниши</h3>
            <p class="text-gray-600 text-sm">
              Работаем в сложных и дорогих нишах - от недвижимости до
              строительства.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm text-center">
            <div class="text-4xl mb-4">📍</div>
            <h3 class="font-bold mb-3">Локальная адаптация</h3>
            <p class="text-gray-600 text-sm">
              Делаем локальную адаптацию под регион и аудиторию.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm text-center">
            <div class="text-4xl mb-4">📊</div>
            <h3 class="font-bold mb-3">Прозрачные отчеты</h3>
            <p class="text-gray-600 text-sm">
              Даём прозрачные цифры и отчёты по каждому каналу.
            </p>
          </div>
        </div>

        <!-- Социальное доказательство -->
        <div class="text-center mt-12">
          <p class="text-lg text-gray-600 mb-6">
            Нам доверяют крупнейшие игроки рынка недвижимости
          </p>
          <div
            class="flex justify-center flex-wrap items-center gap-4 grayscale opacity-60"
          >
            <span class="text-2xl font-bold">ПИК</span>
            <span class="text-2xl font-bold">САМОЛЁТ</span>
            <span class="text-2xl font-bold">АБСОЛЮТ</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Финальный призыв к действию -->
    <section class="py-16 bg-primary-900 text-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Получите стратегию бесплатно
        </h2>
        <p class="text-xl mb-8 text-primary-200 max-w-2xl mx-auto">
          Оставьте заявку, и мы подготовим аудит и план по запуску рекламы в
          Яндекс Директ именно для вашей ниши.
        </p>

        <!-- Форма заявки #3 -->
        <div
          class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-md mx-auto"
        >
          <!-- Сообщения об успехе/ошибке -->
          <div v-if="submitSuccess" class="success-message mb-4">
            ✅ Заявка отправлена! Мы свяжемся с вами в течение 30 минут.
          </div>
          <div v-if="submitError" class="error-message mb-4">
            ❌ {{ submitError }}
          </div>

          <form @submit.prevent="submitForm" class="space-y-4">
            <input
              type="text"
              placeholder="Ваше имя"
              class="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              :class="{ 'form-input-error': submitError && !form.name }"
              v-model="form.name"
              :disabled="isSubmitting"
              required
            />
            <input
              type="tel"
              placeholder="Телефон"
              class="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              :class="{ 'form-input-error': submitError && !form.phone }"
              v-model="form.phone"
              @input="formatPhone"
              :disabled="isSubmitting"
              required
            />
            <input
              type="email"
              placeholder="Email (необязательно)"
              class="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              v-model="form.email"
              :disabled="isSubmitting"
            />
            <button
              type="submit"
              class="w-full btn btn-secondary btn-lg"
              :class="{ 'btn-loading': isSubmitting }"
              :disabled="isSubmitting"
            >
              {{
                isSubmitting ? 'Отправляем...' : 'Получить аудит и стратегию'
              }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useMeta } from '@/composables/useMeta';

useMeta({
  meta: [
    {
      name: 'keywords',
      content:
        'реклама недвижимости, яндекс директ недвижимость, контекстная реклама новостройки, продвижение застройщика, реклама квартир, маркетинг недвижимости, лиды недвижимость, снижение CPL, продажа домов реклама, земельные участки реклама, коттеджные поселки маркетинг',
    },
    { name: 'author', content: 'RT-AGENCY' },
    { 'http-equiv': 'content-language', content: 'ru' },
    { name: 'robots', content: 'index, follow' },
    { name: 'geo.region', content: 'RU' },
    { name: 'geo.placename', content: 'Россия' },
    { name: 'target', content: 'all' },
    { name: 'audience', content: 'all' },
    { name: 'distribution', content: 'global' },
  ],
  link: [
    {
      rel: 'alternate',
      href: 'https://rt-ads.ru/reklama-nedvizhimosti',
      hreflang: 'ru',
    },
    { rel: 'canonical', href: 'https://rt-ads.ru/reklama-nedvizhimosti' },
  ],
  title:
    'Реклама недвижимости в Яндекс Директ | Снижаем CPL в 3 раза | RT-AGENCY',
  description:
    'Настраиваем рекламу недвижимости в Яндекс Директ. Снижаем CPL с 3500₽ до 1200₽ за 6 недель. Кейсы ПИК, Самолет, Абсолют. Бесплатный аудит.',
  ogType: 'website',
  ogImage: 'https://rt-ads.ru/images/real-estate-landing-preview.jpg',
  ogUrl: 'https://rt-ads.ru/reklama-nedvizhimosti',
  ogSiteName: 'RT-AGENCY',
  twitterCard: 'summary_large_image',
  // Schema.org разметка для услуг недвижимости
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Реклама недвижимости в Яндекс Директ',
    description:
      'Профессиональная настройка рекламы недвижимости в Яндекс Директ. Специализируемся на продвижении новостроек, коттеджных поселков, земельных участков и модульных домов.',
    provider: {
      '@type': 'Organization',
      name: 'RT-AGENCY',
      url: 'https://rt-ads.ru',
      logo: 'https://rt-ads.ru/logo.svg',
      email: 'hello@rt-agency.ru',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Москва',
        addressCountry: 'RU',
      },
      sameAs: [
        'https://t.me/RT_adAGENCY',
      ],
    },
    serviceType: 'Контекстная реклама недвижимости',
    areaServed: {
      '@type': 'Country',
      name: 'Россия',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Застройщики, девелоперы, агентства недвижимости',
    },
    offers: {
      '@type': 'Offer',
      description: 'Настройка рекламы недвижимости с гарантией снижения CPL',
      priceRange: 'от 50000 ₽',
      priceCurrency: 'RUB',
      availability: 'https://schema.org/InStock',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Услуги по рекламе недвижимости',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Реклама новостроек',
            description: 'Контекстная реклама квартир в новостройках',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Продвижение коттеджных поселков',
            description: 'Реклама загородной недвижимости и земельных участков',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Реклама модульных домов',
            description: 'Продвижение каркасных и модульных домов',
          },
        },
      ],
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Organization',
          name: 'Группа ПИК',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5,
        },
        reviewBody: 'CPL снизился с 3500₽ до 1200₽, конверсия выросла до 4.1%',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Organization',
          name: 'Самолёт',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
          bestRating: 5,
        },
        reviewBody: 'Заявок стало на 270% больше за 6 недель',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      reviewCount: 15,
      bestRating: 5,
    },
  },
});

// Реактивные данные для формы
const form = reactive({
  name: '',
  phone: '',
  email: '',
  project: '',
});

// Состояние отправки
const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref('');

// Валидация формы
const validateForm = () => {
  const errors = [];

  if (!form.name.trim()) {
    errors.push('Имя обязательно для заполнения');
  }

  if (!form.phone.trim()) {
    errors.push('Телефон обязателен для заполнения');
  } else if (!/^\+?[0-9\s\(\)-]{10,20}$/.test(form.phone)) {
    errors.push('Некорректный формат телефона');
  }

  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.push('Некорректный формат email');
  }

  return errors;
};

// Функция отправки формы
const submitForm = async () => {
  // Сбрасываем предыдущие состояния
  submitError.value = '';
  submitSuccess.value = false;

  // Валидация
  const validationErrors = validateForm();
  if (validationErrors.length > 0) {
    submitError.value = validationErrors.join('. ');
    return;
  }

  try {
    isSubmitting.value = true;

    // Подготавливаем данные для отправки
    const formData = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || '',
      project: form.project.trim() || '',
      source: 'Лендинг недвижимости RT-AGENCY',
      url: window.location.href,
    };

    console.log('Отправляем данные:', formData);

    // Отправка на бэкенд
    const response = await fetch('https://rt-ads.ru/api/real-estate-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Проверяем статус ответа
    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ message: 'Ошибка сети' }));
      throw new Error(
        errorData.message || `Ошибка сервера: ${response.status}`
      );
    }

    const result = await response.json();

    if (result.success) {
      // Успешная отправка
      submitSuccess.value = true;

      // Очистка формы
      Object.keys(form).forEach((key) => {
        form[key] = '';
      });

      // Отправляем событие в аналитику (если настроена)
      trackFormSubmission();

      // Автоматически скрываем сообщение об успехе через 5 секунд
      setTimeout(() => {
        submitSuccess.value = false;
      }, 5000);
    } else {
      throw new Error(result.message || 'Неизвестная ошибка сервера');
    }
  } catch (error) {
    console.error('Ошибка отправки формы:', error);

    // Обработка различных типов ошибок
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      submitError.value =
        'Ошибка подключения к серверу. Проверьте интернет-соединение.';
    } else if (error.message.includes('429')) {
      submitError.value =
        'Слишком много запросов. Попробуйте через несколько минут.';
    } else {
      submitError.value =
        error.message ||
        'Произошла ошибка. Попробуйте еще раз или позвоните нам.';
    }
  } finally {
    isSubmitting.value = false;
  }
};

// Функция для отправки события в аналитику
const trackFormSubmission = () => {
  try {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_submit', {
        form_type: 'real_estate_lead',
        page_location: window.location.href,
      });
    }

    // Яндекс.Метрика
    if (typeof ym !== 'undefined') {
      ym(
        process.env.VUE_APP_METRIKA_ID || 'COUNTER_ID',
        'reachGoal',
        'real_estate_form_submit'
      );
    }
  } catch (analyticsError) {
    console.log('Аналитика недоступна:', analyticsError);
  }
};

// Форматирование телефона при вводе
const formatPhone = () => {
  let value = form.phone.replace(/\D/g, '');

  if (value.length > 0) {
    if (value[0] === '8') {
      value = '7' + value.slice(1);
    }
    if (value[0] === '7') {
      value = '+7' + value.slice(1);
    }

    // Форматирование +7 (XXX) XXX-XX-XX
    if (value.startsWith('+7') && value.length > 2) {
      const number = value.slice(2);
      let formatted = '+7';

      if (number.length > 0) {
        formatted += ' (' + number.slice(0, 3);
      }
      if (number.length > 3) {
        formatted += ') ' + number.slice(3, 6);
      }
      if (number.length > 6) {
        formatted += '-' + number.slice(6, 8);
      }
      if (number.length > 8) {
        formatted += '-' + number.slice(8, 10);
      }

      form.phone = formatted;
    }
  }
};
</script>

<style scoped>
/* Локальные стили кнопок для лендинга */
.btn {
  @apply px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-block text-center;
}

.btn-primary {
  @apply bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200;
}

.btn-secondary {
  @apply bg-orange-500 text-white hover:bg-orange-600 focus:ring-4 focus:ring-orange-200;
}

.btn-lg {
  @apply px-8 py-4 text-lg;
}

/* Сообщения об ошибках и успехе */
.success-message {
  @apply bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg;
}

.error-message {
  @apply bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg;
}

/* Состояния кнопки */
.btn:disabled {
  @apply opacity-50 cursor-not-allowed;
}

.btn-loading {
  @apply relative;
}

.btn-loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  margin: auto;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 1s ease infinite;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
input {
  background-color: white !important;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Стили для полей ввода с ошибками */
.form-input-error {
  @apply border-red-500 focus:border-red-500 focus:ring-red-200;
}

/* Градиент для hero */
.hero-section {
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%);
}

/* Анимация появления для лендинга */
.fade-in {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hover эффекты для кейсов */
.shadow-lg {
  transition: transform 0.2s, box-shadow 0.2s;
}

.shadow-lg:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

@media (max-width: 768px) {
  .real-estate-landing {
    margin-top: 50px;
  }
  form button {
    padding: 10px !important;
  }
  form input {
  }
}
</style>
