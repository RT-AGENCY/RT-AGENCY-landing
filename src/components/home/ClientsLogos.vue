<template>
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h2 class="text-2xl font-bold text-gray-800">Нам доверяют</h2>
      </div>
      <Vue3Marquee
        :css="true"
        :duration="30"
        :direction="'normal'"
        :gradient="true"
        :gradientColor="[255, 255, 255]"
        gradientLength="15"
        class="my-marquee"
      >
        <div v-for="(client, index) in clients" :key="index" class="mx-8">
          <div>
            <img
              :src="client.logo"
              :alt="client.alt"
              class="h-14 max-w-24"
              loading="lazy"
            />
          </div>
        </div>
      </Vue3Marquee>
    </div>
  </section>
</template>

<script setup>
import nikeLogoSvg from '@/assets/images/cases/nike.svg';
import gcrivieraLogoPng from '@/assets/images/cases/gcriviera.png';
import sberbankLogoSvg from '@/assets/images/cases/sberbank.svg';
import evermodLogoSvg from '@/assets/images/cases/evermod.svg';
import holtsovLogoSvg from '@/assets/images/cases/holtsov.svg';
import mszLogoPng from '@/assets/images/cases/msz.png';
import knaufLogoSvg from '@/assets/images/cases/knauf.svg';
import makitaLogoPng from '@/assets/images/cases/makita.png';

const clients = [
  {
    name: 'Nike',
    logo: nikeLogoSvg,
    alt: 'Логотип компании Nike',
  },
  {
    name: 'GC Riviera — Гатчина',
    logo: gcrivieraLogoPng,
    alt: 'Логотип GC Riviera — Гатчина',
  },
  // PrefabHome.eu удален в исходном коде
  {
    name: 'Сбербанк',
    logo: sberbankLogoSvg,
    alt: 'Логотип Сбербанка',
  },
  {
    name: 'Evermod.eu',
    logo: evermodLogoSvg,
    alt: 'Логотип Evermod.eu',
  },
  {
    name: 'Holtsov House',
    logo: holtsovLogoSvg,
    alt: 'Логотип Holtsov House',
  },
  {
    name: '«Москва Столица Здоровья»',
    logo: mszLogoPng,
    alt: 'Логотип «Москва Столица Здоровья»',
  },
  {
    name: 'Knauf',
    logo: knaufLogoSvg,
    alt: 'Логотип компании Knauf',
  },
  {
    name: 'Makita',
    logo: makitaLogoPng,
    alt: 'Логотип компании Makita',
  },
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
  height: 80px;
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
