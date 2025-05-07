<template>
  <section
    class="hero-section relative bg-gradient-to-r from-primary-700 to-primary-900 text-white"
  >
    <!-- Декоративный фон -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute opacity-10 top-0 right-0 w-1/2 h-full">
        <!-- Здесь может быть декоративный SVG паттерн -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 800"
          class="w-full h-full"
        >
          <rect width="800" height="800" fill="none"></rect>
          <g>
            <path
              fill="currentColor"
              d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"
            ></path>
            <path
              fill="currentColor"
              d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764"
            ></path>
            <path
              fill="currentColor"
              d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880"
            ></path>
            <path
              fill="currentColor"
              d="M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382"
            ></path>
            <path
              fill="currentColor"
              d="M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-31 229"
            ></path>
          </g>
        </svg>
      </div>
    </div>

    <div
      class="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10"
    >
      <div class="max-w-3xl">
        <!-- Заголовок с УТП -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Увеличиваем прибыль <br class="hidden md:block" />
          <span class="text-primary-300">с помощью маркетинга</span>
        </h1>

        <!-- Подзаголовок -->
        <p class="text-xl md:text-2xl mb-8 text-gray-200">
          Наше агентство специализируется на performance-маркетинге: рекламе с
          оплатой за результат, а не за клики
        </p>

        <!-- Кнопки призыва к действию -->
        <div class="flex flex-col sm:flex-row gap-4">
          <router-link
            to="/contacts"
            class="btn bg-white text-primary-700 hover:bg-gray-100 font-bold"
          >
            Запустить рекламу
          </router-link>
          <router-link
            to="/cases"
            class="btn btn-outline border-white text-white hover:text-white hover:bg-white/10"
          >
            Посмотреть кейсы
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Компонент не требует дополнительной логики
</script>

<style scoped>
.hero-section {
  height: auto;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 80vh;
  }
}
</style>
