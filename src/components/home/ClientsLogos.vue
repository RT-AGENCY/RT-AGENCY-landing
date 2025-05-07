<template>
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h2 class="text-2xl font-bold text-gray-800">Нам доверяют</h2>
      </div>

      <div class="logo-slider">
        <div class="logo-track">
          <div
            v-for="(client, index) in clients"
            :key="index"
            class="logo-item"
          >
            <div class="px-8 py-4">
              <!-- Плейсхолдер для логотипа (замените на изображение) -->
              <div class="h-16 flex items-center justify-center">
                <div v-if="false">
                  <img
                    :src="client.logo"
                    :alt="client.name"
                    class="max-h-12 max-w-full"
                  />
                </div>
                <!-- Временная замена логотипа -->
                <div class="text-xl font-bold text-gray-400 opacity-60">
                  {{ client.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Список компаний-клиентов
const clients = [
  { name: 'Компания 1', logo: '/logos/logo1.svg' },
  { name: 'Компания 2', logo: '/logos/logo2.svg' },
  { name: 'Компания 3', logo: '/logos/logo3.svg' },
  { name: 'Компания 4', logo: '/logos/logo4.svg' },
  { name: 'Компания 5', logo: '/logos/logo5.svg' },
  { name: 'Компания 6', logo: '/logos/logo6.svg' },
  { name: 'Компания 7', logo: '/logos/logo7.svg' },
  { name: 'Компания 8', logo: '/logos/logo8.svg' },
];
</script>

<style scoped>
.logo-slider {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.logo-track {
  display: flex;
  animation: slide 30s linear infinite;
}

.logo-item {
  flex: 0 0 auto;
  width: 25%;
}

@media (max-width: 1024px) {
  .logo-item {
    width: 33.333%;
  }
}

@media (max-width: 768px) {
  .logo-item {
    width: 50%;
  }
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-25% * 8)); /* Количество логотипов */
  }
}
</style>
