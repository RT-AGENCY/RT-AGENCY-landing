<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4 gap-2.5">
        <!-- Логотип -->
        <AppLogo />

        <!-- Навигация для десктопа -->
        <nav class="hidden md:flex space-x-3 lg:space-x-8 text-nowrap">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.isDisable ? '' : item.path"
            @click.native.prevent="
              item.isDisable ? null : $router.push(item.path)
            "
            class="text-gray-700 hover:text-primary-600 font-medium text-sm"
            :class="[
              item.isDisable
                ? 'text-gray-400 cursor-not-allowed'
                : 'hover:text-primary-600',
              { 'text-primary-600': isActiveRoute(item.path) },
            ]"
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
          <router-link to="/contacts" class="btn btn-primary hover:text-white p-2 lg:p-4 text-sm lg:text-base">
            Оставить заявку
          </router-link>
        </div>
      </div>

      <!-- Мобильное меню -->
      <div v-if="isMenuOpen" class="md:hidden py-4 space-y-3">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.isDisable ? '' : item.path"
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
  { name: 'Услуги', path: '/services', isDisable: true },
  { name: 'Кейсы', path: '/cases', isDisable: true },
  { name: 'Блог', path: '/blog', isDisable: true },
  { name: 'О компании', path: '/about', isDisable: true },
  { name: 'Контакты', path: '/contacts'},
  { name: 'Тарифы', path: '/pricing', isDisable: true },
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
