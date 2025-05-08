import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import routes from './router'
import './style.css'
import Vue3Marquee from 'vue3-marquee'


// Импорт основных стилей
import './assets/styles/main.css'

// Создаем экземпляры приложения, роутера, Pinia и Head
const app = createApp(App)
const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Прокрутка вверх при переходе на новую страницу
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
const head = createHead()

// Регистрируем плагины
app.use(pinia)
app.use(router)
app.use(head)
app.use(Vue3Marquee)

// Глобальные настройки для мета-тегов
app.provide('siteName', 'RT-AGENCY')
app.provide('siteDescription', 'Маркетинговое агентство, специализирующееся на performance-маркетинге')

// Монтируем приложение
app.mount('#app')