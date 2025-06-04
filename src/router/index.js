// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'

// Импортируем массив routes (то, что вы приводили в своём сообщении)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/HomePage.vue'),
    meta: {
      title: 'Главная | RT-AGENCY',
      description: 'Маркетинговое агентство, специализирующееся на performance-маркетинге',
    },
  },
  // Примеры закомментированных маршрутов можно раскомментировать при необходимости
  // {
  //   path: '/services',
  //   name: 'services',
  //   component: () => import('../pages/ServicesPage.vue'),
  //   meta: {
  //     title: 'Услуги | RT-AGENCY',
  //     description: 'Полный спектр услуг по digital-маркетингу: контекстная и таргетированная реклама, SEO, CRO',
  //   },
  // },
  // {
  //   path: '/services/:slug',
  //   name: 'service-detail',
  //   component: () => import('../pages/ServiceDetailPage.vue'),
  //   meta: {
  //     title: 'Услуга | RT-AGENCY',
  //     description: 'Подробное описание услуги с кейсами и результатами',
  //   },
  // },
  {
    path: '/cases',
    name: 'cases',
    component: () => import('../pages/CasesPage.vue'),
    meta: {
      title: 'Кейсы | RT-AGENCY',
      description: 'Наши успешные кейсы и результаты работы с клиентами',
    },
  },
  // {
  //   path: '/cases/:slug',
  //   name: 'case-detail',
  //   component: () => import('../pages/CaseDetailPage.vue'),
  //   meta: {
  //     title: 'Кейс | RT-AGENCY',
  //     description: 'Детальный разбор кейса с результатами и использованными инструментами',
  //   },
  // },
  // {
  //   path: '/blog',
  //   name: 'blog',
  //   component: () => import('../pages/BlogPage.vue'),
  //   meta: {
  //     title: 'Блог | RT-AGENCY',
  //     description: 'Статьи, гайды и новости по маркетингу и рекламе',
  //     layout: 'blog',
  //   },
  // },
  // {
  //   path: '/blog/:slug',
  //   name: 'blog-post',
  //   component: () => import('../pages/BlogPostPage.vue'),
  //   meta: {
  //     title: 'Статья | RT-AGENCY',
  //     description: 'Полезные материалы по маркетингу и рекламе',
  //     layout: 'blog',
  //   },
  // },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/AboutPage.vue'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../pages/ContactsPage.vue'),
  },
  // {
  //   path: '/pricing',
  //   name: 'pricing',
  //   component: () => import('../pages/PricingPage.vue'),
  //   meta: {
  //     title: 'Тарифы | RT-AGENCY',
  //     description: 'Стоимость услуг и условия сотрудничества',
  //   },
  // },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../pages/PrivacyPage.vue'),
    meta: {
      title: 'Политика конфиденциальности | RT-AGENCY',
      description: 'Информация о том, как RT-AGENCY собирает, использует и защищает ваши персональные данные.',
    },
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../pages/TermsPage.vue'),
    meta: {
      title: 'Условия использования | RT-AGENCY',
      description: 'Правила и положения, регулирующие использование веб-сайта RT-AGENCY.',
    },
  },
  // {
  //   path: '/search',
  //   name: 'search',
  //   component: () => import('../pages/SearchPage.vue'),
  //   meta: {
  //     title: 'Поиск | RT-AGENCY',
  //     description: 'Поиск по сайту',
  //   },
  // },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../pages/NotFoundPage.vue'),
    meta: {
      title: '404 | Страница не найдена',
      description: 'Запрашиваемая страница не существует',
    },
  },
]

// Создаём роутер с поддержкой истории браузера и прокрутки по якорям
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Если браузер сохранил позицию (нажатие «назад»/«вперёд») — возвращаем её:
    if (savedPosition) {
      return savedPosition
    }

    // Если в URL есть hash (например, #application) — ждём, пока элемент появится в DOM,
    // а потом плавно скроллим к нему с отступом сверху.
    if (to.hash) {
      return new Promise((resolve) => {
        // Тут мы ждём, пока компонент (и его шаблон) смонтируются.
        // 300 ms обычно хватает, но можно подкорректировать под свои страницы.
        setTimeout(() => {
          const element = document.querySelector(to.hash)
          if (element) {
            resolve({
              el: to.hash,
              behavior: 'smooth',
              // Если у вас есть фиксированный шапка высотой, допустим, 80px, указываем top: 80
              top: 80,
            })
          } else {
            // Если всё-таки не нашли элемент (например, неверный id) — просто скроллим наверх
            resolve({ top: 0 })
          }
        }, 300)
      })
    }

    // По умолчанию — скроллим наверх:
    return { top: 0 }
  },
})

export default router
