import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    // Оптимизация сборки
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // Удаление console.log в продакшене
        drop_debugger: true  // Удаление debugger в продакшене
      }
    },
    // Генерация карты исходников в продакшене для более легкой отладки
    sourcemap: false,
    // Разбивка чанков для лучшей загрузки
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router', 'pinia'],
          'ui': ['@vueuse/core']
        }
      }
    }
  }
})