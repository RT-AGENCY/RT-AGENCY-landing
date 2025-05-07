<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />

    <main class="flex-grow">
      <slot></slot>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
</script>
