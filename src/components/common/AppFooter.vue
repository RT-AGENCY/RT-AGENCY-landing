<template>
  <footer class="bg-gray-900 text-white pt-12 pb-6">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <!-- Информация о компании -->
        <div class="col-span-1">
          <AppLogo :isFooter="true" />
          <p class="mt-4 text-gray-400 text-left">
            RT-AGENCY - агентство, специализирующееся на достижении конкретных
            бизнес-результатов для клиентов.
          </p>
          <!-- <div class="mt-6 flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">Facebook</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">VK</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 16.902h-1.744c-.655 0-.873-.523-2.088-1.744-1.048-1.048-1.569-.96-1.569-.96V16.38c0 .349-.175.523-.61.523h-.96c-1.309 0-2.443-.175-3.839-1.483-1.918-1.83-3.662-5.492-3.662-5.492s-.174-.436.012-.654c.218-.218.81-.218.81-.218h1.83c.35 0 .48.174.654.48.262.567 1.309 2.531 1.918 3.316.873 1.133 1.222.96 1.483.61V9.93c0-1.048-.262-1.483-.524-1.83-.174-.262-.087-.436.175-.61.262-.175.873-.262 2.532-.262 1.046 0 1.483.087 1.918.262.87.349.698.96.698 2.793 0 .61-.087 1.483.349 1.744.261.174.873 0 2.356-3.403.698-1.222 1.22-2.705 1.22-2.705s.175-.261.35-.349c.26-.087.435 0 .435 0l1.918-.012c.61 0 .785.174.873.436.174.524-.35 1.744-1.658 3.75-.262.35-1.57 2.443-1.482 2.443.87.175 1.483.698 1.831 1.222 1.047 1.57 1.047 2.008 1.483 2.268.523.349.349.785.262.96-.87.175-.872.175-1.744.175z"
                />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <span class="sr-only">Telegram</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.862 6.576-1.221 8.713-.15.897-.316 1.197-.518 1.227-.393.064-.694-.28-1.076-.55-1.117-.8-1.383-.946-2.33-1.69-.367-.259-.92-.346-1.027-.138-.067.16-.176 1.192-.198 1.402-.803.967-1.155.674-1.155.674l-.251-.443c-.065-.112-.2-.29-.1-.645.097-.348.647-1.526.647-1.526.82-1.735 1.237-2.792 1.01-3.054-.305-.351-1.097.088-1.097.088L6.339 13.47c-.39-.053-.702-.247-.702-.247l-1.009-.584s-.373-.208-.273-.418c.037-.079.124-.116.227-.17.952-.48 2.343-1.102 2.343-1.102 2.824-1.169 4.243-1.72 5.06-1.72.2 0 .295.022.297.022l.023.01c.859.115 1.454.606 1.454.606l.176.089c.221.059.571.195.571.485 0 .148-.055.297-.11.445z"
                />
              </svg>
            </a>
          </div> -->
        </div>

        <!-- Навигация -->
        <div class="col-span-1">
          <h3 class="text-lg font-bold mb-4 text-left">Навигация</h3>
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.path" class="text-left">
              <router-link
                :to="item.path"
                class="text-gray-400 hover:text-white"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Услуги -->
        <div class="col-span-1">
          <h3 class="text-lg font-bold mb-4 text-left">Услуги</h3>
          <ul class="space-y-2">
            <li
              v-for="service in services"
              :key="service.slug"
              class="text-left"
            >
              <!-- <router-link
                :to="`/services/${service.slug}`"
                class="text-gray-400 hover:text-white"
              > -->
              <span class="text-gray-400"> {{ service.name }}</span>
              <!-- </router-link> -->
            </li>
          </ul>
        </div>

        <!-- Контакты -->
        <div class="col-span-1">
          <h3 class="text-lg font-bold mb-4 text-left">Контакты</h3>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start text-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2 text-primary-500 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>г. Москва</span>
            </li>
            <li class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2 text-primary-500 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
                <a
                  href="tel:+79691639977"
                  class="text-gray-400 hover:text-primary-600 transition-colors"
                  >+7 (969) 163-99-77</a
                >
            </li>

            <li class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2 text-primary-500 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                />
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                />
              </svg>
              <a
                href="mailto:hello@rt-agency.ru"
                class="text-nowrap text-gray-400"
                >hello@rt-agency.ru</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm text-gray-400">
            © {{ new Date().getFullYear() }} RT-AGENCY. Все права защищены.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <router-link
              to="/privacy"
              class="text-sm text-gray-400 hover:text-white"
            >
              Политика конфиденциальности
            </router-link>
            <router-link
              to="/terms"
              class="text-sm text-gray-400 hover:text-white"
            >
              Условия использования
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import AppLogo from './AppLogo.vue';

// Определение пунктов меню
const navItems = [
  { name: 'Главная', path: '/' },
  // { name: 'Услуги', path: '/services' },
  { name: 'Кейсы', path: '/cases' },
  // { name: 'Блог', path: '/blog' },
  { name: 'О компании', path: '/about' },
  { name: 'Контакты', path: '/contacts' },
  // { name: 'Тарифы', path: '/pricing' },
];

// Услуги
const services = [
  { name: 'Контекстная реклама', slug: 'context-ads' },
  { name: 'Таргетированная реклама', slug: 'targeted-ads' },
  { name: 'SEO-продвижение', slug: 'seo' },
  { name: 'Веб-аналитика', slug: 'web-analytics' },
  { name: 'Оптимизация конверсий', slug: 'cro' },
];
</script>
