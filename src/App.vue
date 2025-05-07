<template>
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from './layouts/DefaultLayout.vue';
import BlogLayout from './layouts/BlogLayout.vue';

const route = useRoute();

// Определяем текущий макет в зависимости от маршрута
const layout = computed(() => {
  const layoutName = route.meta.layout || 'default';
  return layoutName === 'blog' ? BlogLayout : DefaultLayout;
});
</script>

<style>
/* Подключение стилей tailwind */
@import './assets/styles/main.css';

/* Базовые стили для приложения */
html,
body {
  scroll-behavior: smooth;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
