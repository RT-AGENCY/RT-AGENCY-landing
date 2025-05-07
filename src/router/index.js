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

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Главная | Performance Agency',
      description: 'Маркетинговое агентство, специализирующееся на performance-маркетинге',
    }
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesPage,
    meta: {
      title: 'Услуги | Performance Agency',
      description: 'Полный спектр услуг по digital-маркетингу: контекстная и таргетированная реклама, SEO, CRO',
    }
  },
  {
    path: '/services/:slug',
    name: 'service-detail',
    component: ServiceDetailPage,
    meta: {
      title: 'Услуга | Performance Agency',
      description: 'Подробное описание услуги с кейсами и результатами'
    }
  },
  {
    path: '/cases',
    name: 'cases',
    component: CasesPage,
    meta: {
      title: 'Кейсы | Performance Agency',
      description: 'Наши успешные кейсы и результаты работы с клиентами',
    }
  },
  {
    path: '/cases/:slug',
    name: 'case-detail',
    component: CaseDetailPage,
    meta: {
      title: 'Кейс | Performance Agency',
      description: 'Детальный разбор кейса с результатами и использованными инструментами'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogPage,
    meta: {
      title: 'Блог | Performance Agency',
      description: 'Статьи, гайды и новости по маркетингу и рекламе',
      layout: 'blog'
    }
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: BlogPostPage,
    meta: {
      title: 'Статья | Performance Agency',
      description: 'Полезные материалы по маркетингу и рекламе',
      layout: 'blog'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    meta: {
      title: 'О компании | Performance Agency',
      description: 'История, команда и ценности нашего агентства',
    }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsPage,
    meta: {
      title: 'Контакты | Performance Agency',
      description: 'Свяжитесь с нами для консультации по вопросам рекламы',
    }
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: PricingPage,
    meta: {
      title: 'Тарифы | Performance Agency',
      description: 'Стоимость услуг и условия сотрудничества',
    }
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPage,
    meta: {
      title: 'Поиск | Performance Agency',
      description: 'Поиск по сайту',
    }
  },
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