<template>
  <section class="py-16 bg-primary-900 text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Почему нам доверяют</h2>
        <p class="text-lg text-gray-300 max-w-3xl mx-auto">
          Наши результаты говорят сами за себя
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="text-center p-6 rounded-lg bg-primary-800/50">
          <div class="text-4xl md:text-5xl font-bold text-white mb-2">
            <span ref="years" class="counter">{{ displayValues.years }}</span
            >+
          </div>
          <p class="text-gray-300 font-medium">Лет опыта</p>
        </div>

        <div class="text-center p-6 rounded-lg bg-primary-800/50">
          <div class="text-4xl md:text-5xl font-bold text-white mb-2">
            <span ref="clients" class="counter">{{
              displayValues.clients
            }}</span
            >+
          </div>
          <p class="text-gray-300 font-medium">Довольных клиентов</p>
        </div>

        <div class="text-center p-6 rounded-lg bg-primary-800/50">
          <div class="text-4xl md:text-5xl font-bold text-white mb-2">
            <span ref="roi" class="counter">{{ displayValues.roi }}</span
            >%
          </div>
          <p class="text-gray-300 font-medium">Средний ROI</p>
        </div>

        <div class="text-center p-6 rounded-lg bg-primary-800/50">
          <div class="text-4xl md:text-5xl font-bold text-white mb-2">
            <span ref="cases" class="counter">{{ displayValues.cases }}</span
            >+
          </div>
          <p class="text-gray-300 font-medium">Успешных кейсов</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

// Реальные конечные значения
const targetValues = {
  years: 20,
  clients: 150,
  roi: 320,
  cases: 200,
};

// Отображаемые значения (для анимации)
const displayValues = reactive({
  years: 0,
  clients: 0,
  roi: 0,
  cases: 0,
});

// Элементы для отслеживания появления в области видимости
const years = ref(null);
const clients = ref(null);
const roi = ref(null);
const cases = ref(null);

// Функция для анимации счетчика
const animateCounter = (statKey, targetValue, duration = 2000) => {
  const start = displayValues[statKey];
  const end = targetValue;
  const range = end - start;
  const startTime = performance.now();

  const animate = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    // Функция плавности (easeOutQuart)
    const easeProgress = 1 - Math.pow(1 - progress, 4);

    displayValues[statKey] = Math.round(start + range * easeProgress);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

// Инициализация наблюдателей для каждого элемента
onMounted(() => {
  const statElements = { years, clients, roi, cases };

  Object.entries(statElements).forEach(([key, element]) => {
    // Настройка наблюдателя пересечения для каждого элемента
    useIntersectionObserver(
      element,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          // Запуск анимации когда элемент появляется в поле зрения
          animateCounter(key, targetValues[key]);
        }
      },
      { threshold: 0.1 }
    );
  });
});
</script>

<style scoped>
.counter {
  display: inline-block;
}
</style>
