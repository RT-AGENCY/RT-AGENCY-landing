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
            aria-label="Открыть меню"
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
        <div class="hidden md:flex gap-5">
          <!-- Иконки мессенджеров и кнопка действия -->
          <div class="hidden md:flex items-center gap-3">
            <!-- Иконки мессенджеров -->
            <div class="flex items-center gap-2.5">
              <!-- Telegram -->
              <a
                href="https://t.me/RT_adAGENCY"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors group"
                title="Написать в Telegram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-primary-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z"
                  />
                </svg>
              </a>
              <!-- WhatsApp -->
              <a
                href="https://api.whatsapp.com/send/?phone=79691639977&text=Добрый+день%21+Хотим+бесплатную+консультацию%21&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors group"
                title="Написать в WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"
                  />
                </svg>
              </a>
            </div>
          </div>
          <router-link
            to="/contacts"
            class="btn btn-primary hover:text-white p-2 lg:p-4 text-sm lg:text-base"
          >
            Оставить заявку
          </router-link>
        </div>
      </div>

      <!-- Мобильное меню -->
      <div v-if="isMenuOpen" class="md:hidden py-4 space-y-3">
        <div>
          <!-- Иконки мессенджеров для мобильных -->
          <div class="flex justify-center gap-4 pt-4 border-t border-gray-200">
            <!-- Telegram -->
            <a
              href="https://t.me/RT_adAGENCY"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors"
              @click="isMenuOpen = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-primary-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z"
                />
              </svg>
            </a>

            <!-- WhatsApp -->
            <a
              href="https://api.whatsapp.com/send/?phone=79691639977&text=Добрый+день%21+Хотим+бесплатную+консультацию%21&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors"
              @click="isMenuOpen = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-primary-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"
                />
              </svg>
            </a>
          </div>
        </div>
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
  // { name: 'Услуги', path: '/services', isDisable: true },
  { name: 'Кейсы', path: '/cases' },
  // { name: 'Блог', path: '/blog', isDisable: true },
  { name: 'О компании', path: '/about' },
  { name: 'Контакты', path: '/contacts' },
  // { name: 'Тарифы', path: '/pricing', isDisable: true },
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
