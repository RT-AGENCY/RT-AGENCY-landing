<template>
  <div class="not-found-page">
    <h1>404 Not Found</h1>
    <p>The page you are looking for doesn't exist.</p>
  </div>
</template>

<script setup>
import { useMeta } from '@/composables/useMeta';

useMeta({
  title: '404 - Страница не найдена | RT-AGENCY',
  robots: 'noindex, nofollow',
});
// No additional logic is needed for this component.
</script>

<style scoped>
.not-found-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.not-found-page h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.not-found-page p {
  font-size: 1.25rem;
  color: #666;
}
</style>
