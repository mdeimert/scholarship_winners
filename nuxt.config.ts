// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['./assets/css/main.css', 'primeicons/primeicons.css'],
  runtimeConfig: {
    public: {
      apiBase: process.env.PUBLIC_API_BASE,
      baseUrl: process.env.PUBLIC_BASE_URL || '/',
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png', // or '/favicon.ico'
        },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@primevue/nuxt-module',
      {
        options: {
          theme: {
            preset: Aura,
            options: {
              darkModeSelector: '.dark',
            },
          },
        },
      },
    ],
    '@nuxtjs/seo',
  ],
  site: {
    url: 'https://scholarship-winners.example.com',
    name: 'Scholarship Winners',
    description: 'A showcase of scholarship winners and their achievements.',
    defaultLocale: 'en',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
