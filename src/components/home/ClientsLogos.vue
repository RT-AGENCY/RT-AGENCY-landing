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
            <div
              class="px-4 py-2 flex items-center justify-between flex-col h-full"
            >
              <img
                :src="client.logo"
                :alt="client.name"
                class="h-14 max-w-24"
              />
              <!-- Временная замена логотипа -->
              <div
                class="text-xs sm:text-base font-bold text-gray-400 opacity-60"
              >
                {{ client.name }}
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
  { name: 'Nike', logo: '/assets/images/cases/nike.svg' },
  {
    name: 'GC Riviera — Гатчина',
    logo: '/assets/images/cases/gcriviera.png',
  },
  // { name: 'PrefabHome.eu', logo: '/src/assets/images/cases/pfh_logo.png' },
  { name: 'Сбербанк', logo: 'src/assets/images/cases/sberbank.svg' },
  { name: 'Evermod.eu', logo: 'src/assets/images/cases/evermod.svg' },
  { name: 'Holtsov House', logo: 'src/assets/images/cases/holtsov.svg' },
  // { name: '«Москва Столица Здоровья»', logo: '@/assets/images/cases/msz.png' },
  {
    name: '«Москва Столица Здоровья»',
    logo: '/assets/images/cases/msz.png',
  },
  { name: 'Knauf', logo: 'src/assets/images/cases/knauf.svg' },
  { name: 'Makita', logo: 'src/assets/images/cases/makita.png' },
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
  height: 100%;
  height: 110px;
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
