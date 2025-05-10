<template>
  <section
    class="hero-section relative text-white overflow-hidden"
  >
    <div class="absolute inset-0 bg-gradient-animate">
      <div
        class="absolute inset-0 opacity-90 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900"
      ></div>
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
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
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

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
