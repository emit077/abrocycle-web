// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [],
  ssr: true, // Enable SSR for better SEO
  nitro: {
    prerender: {
      routes: ['/', '/products/1', '/products/2', '/products/3', '/products/4', '/products/5']
    },
    routeRules: {
      '/': { prerender: true, headers: { 'cache-control': 's-maxage=31536000' } },
      '/products/**': { isr: true },
      '/api/**': { cors: true }
    }
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css',
    '~/assets/css/main.scss'
  ],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    ssr: {
      noExternal: ['vuetify']
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vuetify'],
            utils: ['@mdi/font']
          }
        }
      }
    }
  },
  app: {
    baseURL: '/abrocycle-web/',
    buildAssetsDir: '/_nuxt/',
    head: {
      title: 'ABRO Cycle - Premium Bicycles in Haridwar, Uttarakhand',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Premium bicycles and cycling accessories in Haridwar, Uttarakhand, India. Quality bikes for every adventure with expert service and maintenance.' },
        { name: 'keywords', content: 'bicycles, bikes, cycling, Haridwar, Uttarakhand, premium bikes, cruiser cycles, mountain bikes, city bikes' },
        { name: 'author', content: 'ABRO Cycle' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'ABRO Cycle - Premium Bicycles in Haridwar' },
        { property: 'og:description', content: 'Premium bicycles and cycling accessories in Haridwar, Uttarakhand, India' },
        { property: 'og:image', content: '/abrocycle-web/images/hero-bg.png' },
        { property: 'og:url', content: 'https://yourdomain.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'ABRO Cycle' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ABRO Cycle - Premium Bicycles' },
        { name: 'twitter:description', content: 'Premium bicycles in Haridwar, Uttarakhand' },
        { name: 'twitter:image', content: '/abrocycle-web/images/hero-bg.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://yourdomain.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  }
})