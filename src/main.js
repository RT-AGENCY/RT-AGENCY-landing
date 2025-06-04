import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'

import Vue3Marquee from 'vue3-marquee'

const app = createApp(App)

// Импорт основных стилей
import './assets/styles/main.css'
import './style.css'

// Создаем экземпляры приложения, роутера, Pinia и Head
const pinia = createPinia()
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