import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#FFD700',
            secondary: '#1565c0',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
            'abro-orange': '#FF6B35',
            'abro-blue': '#004E89',
            'abro-gray': '#F5F5F5'
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
