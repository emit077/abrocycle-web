// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [],
  ssr: false, // Enable static generation for GitHub Pages
  nitro: {
    prerender: {
      routes: ['/']
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
    }
  },
  app: {
    baseURL: '/abrocycle-web/',
    buildAssetsDir: '/_nuxt/',
    head: {
      title: 'ABRO Cycle - Premium Bicycles in Haridwar',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'ABRO Cycle - Premium bicycles and cycling accessories in Haridwar, Uttarakhand, India' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})