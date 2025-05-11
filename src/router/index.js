import HomePage from '../pages/HomePage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import ServiceDetailPage from '../pages/ServiceDetailPage.vue'
import CasesPage from '../pages/CasesPage.vue'
import CaseDetailPage from '../pages/CaseDetailPage.vue'
import BlogPage from '../pages/BlogPage.vue'
import BlogPostPage from '../pages/BlogPostPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ContactsPage from '../pages/ContactsPage.vue'
import PricingPage from '../pages/PricingPage.vue'
import SearchPage from '../pages/SearchPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import PrivacyPage from '../pages/PrivacyPage.vue'
import TermsPage from '../pages/TermsPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Главная | RT-AGENCY',
      description: 'Маркетинговое агентство, специализирующееся на performance-маркетинге',
    }
  },
  // {
  //   path: '/services',
  //   name: 'services',
  //   component: ServicesPage,
  //   meta: {
  //     title: 'Услуги | RT-AGENCY',
  //     description: 'Полный спектр услуг по digital-маркетингу: контекстная и таргетированная реклама, SEO, CRO',
  //   }
  // },
  // {
  //   path: '/services/:slug',
  //   name: 'service-detail',
  //   component: ServiceDetailPage,
  //   meta: {
  //     title: 'Услуга | RT-AGENCY',
  //     description: 'Подробное описание услуги с кейсами и результатами'
  //   }
  // },
  {
    path: '/cases',
    name: 'cases',
    component: CasesPage,
    meta: {
      title: 'Кейсы | RT-AGENCY',
      description: 'Наши успешные кейсы и результаты работы с клиентами',
    }
  },
  // {
  //   path: '/cases/:slug',
  //   name: 'case-detail',
  //   component: CaseDetailPage,
  //   meta: {
  //     title: 'Кейс | RT-AGENCY',
  //     description: 'Детальный разбор кейса с результатами и использованными инструментами'
  //   }
  // },
  // {
  //   path: '/blog',
  //   name: 'blog',
  //   component: BlogPage,
  //   meta: {
  //     title: 'Блог | RT-AGENCY',
  //     description: 'Статьи, гайды и новости по маркетингу и рекламе',
  //     layout: 'blog'
  //   }
  // },
  // {
  //   path: '/blog/:slug',
  //   name: 'blog-post',
  //   component: BlogPostPage,
  //   meta: {
  //     title: 'Статья | RT-AGENCY',
  //     description: 'Полезные материалы по маркетингу и рекламе',
  //     layout: 'blog'
  //   }
  // },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsPage,
  },
  // {
  //   path: '/pricing',
  //   name: 'pricing',
  //   component: PricingPage,
  //   meta: {
  //     title: 'Тарифы | RT-AGENCY',
  //     description: 'Стоимость услуг и условия сотрудничества',
  //   }
  // },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyPage,
    meta: {
      title: 'Политика конфиденциальности | RT-AGENCY',
      description: 'Информация о том, как RT-AGENCY собирает, использует и защищает ваши персональные данные.',
    }
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsPage,
    meta: {
      title: 'Условия использования | RT-AGENCY',
      description: 'Правила и положения, регулирующие использование веб-сайта RT-AGENCY.',
    }
  },
  // {s
  //   path: '/search',
  //   name: 'search',
  //   component: SearchPage,
  //   meta: {
  //     title: 'Поиск | RT-AGENCY',
  //     description: 'Поиск по сайту',
  //   }
  // },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
    meta: {
      title: '404 | Страница не найдена',
      description: 'Запрашиваемая страница не существует',
    }
  }
]

export default routes