<template>
  <router-link to="/" class="flex items-center">
    <img
      src="@/assets/images/logo.svg"
      alt="RT-AGENCY Logo"
      class="h-10 w-auto"
      v-if="false"
    />
    <!-- Заглушка, пока нет svg логотипа -->
    <div
      :class="[
        'font-bold text-xl tracking-tight',
        isFooter ? 'text-white' : 'text-gray-900',
      ]"
    >
      <span class="text-primary-600">RT</span>-
      AGENCY
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  isFooter: {
    type: Boolean,
    default: false,
  },
});
</script>
