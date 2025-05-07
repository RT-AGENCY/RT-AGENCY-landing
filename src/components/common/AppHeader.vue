<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Логотип -->
        <AppLogo />

        <!-- Навигация для десктопа -->
        <nav class="hidden md:flex space-x-8">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-700 hover:text-primary-600 font-medium"
            :class="{ 'text-primary-600': isActiveRoute(item.path) }"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- Кнопка меню для мобильных -->
        <div class="flex md:hidden">
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="text-gray-700 hover:text-primary-600 focus:outline-none"
          >
            <svg
              v-if="!isMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Кнопка действия -->
        <div class="hidden md:block">
            <router-link to="/contacts" class="btn btn-primary hover:text-white">
            Оставить заявку
            </router-link>
        </div>
      </div>

      <!-- Мобильное меню -->
      <div v-if="isMenuOpen" class="md:hidden py-4 space-y-3">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="block text-gray-700 hover:text-primary-600 font-medium py-2"
          :class="{ 'text-primary-600': isActiveRoute(item.path) }"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </router-link>

        <router-link
          to="/contacts"
          class="btn btn-primary w-full text-center mt-4"
          @click="isMenuOpen = false"
        >
          Оставить заявку
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import AppLogo from './AppLogo.vue';

const route = useRoute();
const isMenuOpen = ref(false);

// Определение пунктов меню
const navItems = [
  { name: 'Главная', path: '/' },
  { name: 'Услуги', path: '/services' },
  { name: 'Кейсы', path: '/cases' },
  { name: 'Блог', path: '/blog' },
  { name: 'О компании', path: '/about' },
  { name: 'Контакты', path: '/contacts' },
  { name: 'Тарифы', path: '/pricing' },
];

// Проверка активного маршрута
const isActiveRoute = (path) => {
  if (path === '/') {
    return route.path === '/';
  }
  return route.path.startsWith(path);
};

// Закрытие меню при изменении размера экрана
if (typeof window !== 'undefined') {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && isMenuOpen.value) {
      isMenuOpen.value = false;
    }
  });
}
</script>
