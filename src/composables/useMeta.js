import { useHead } from '@vueuse/head'
import { computed, inject } from 'vue'

/**
 * Композабл для управления метаданными страницы (SEO)
 * @param {Object} options - Параметры метаданных
 * @returns {Object} - Инструменты для работы с метаданными
 */
export function useMeta(options = {}) {
  const siteName = inject('siteName', 'RT-AGENCY')
  const siteDescription = inject('siteDescription', 'Маркетинговое агентство, специализирующееся на performance-маркетинге')

  const title = computed(() => options.title ? `${options.title} | ${siteName}` : siteName)
  const description = computed(() => options.description || siteDescription)
  const image = computed(() => options.image || 'https://rt-ads.ru/logo.svg')
  const url = computed(() => options.url || (typeof window !== 'undefined' ? window.location.href : ''))

  // Устанавливаем метаданные через useHead
  useHead({
    // Базовые мета-теги
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: options.robots || 'index, follow' },

      // Добавьте эти:
      { name: 'keywords', content: options.keywords },
      { name: 'author', content: options.author || 'RT-AGENCY' },
      { 'http-equiv': 'content-language', content: options.language || 'ru' },

      // OpenGraph meta
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: options.ogType || 'website' },
      { property: 'og:site_name', content: siteName },

      // Twitter card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    link: [
      { rel: 'canonical', href: url },
      { rel: 'alternate', href: options.alternateUrl, hreflang: options.hreflang },
    ],

    // Схема разметки для поисковых систем
    script: options.schema
      ? [
        {
          type: 'application/ld+json',
          children: JSON.stringify(options.schema)
        }
      ]
      : []
  })

  return {
    title,
    description,
    image,
    url
  }
}