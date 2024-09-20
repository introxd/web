// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxthub/core'
  ],

  unocss: {
    autoImport: false
  },

  lodash: {
    prefix: '_',
    prefixSkip: false,
    upperAfterPrefix: false
  },

  css: [
    '@unocss/reset/tailwind.css'
  ],

  imports: {
    dirs: [
      'composables/**/use*.ts',
      'enums/**'
    ]
  },

  hub: {
    kv: true
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },

  devServer: {
    host: '0.0.0.0'
  },

  compatibilityDate: '2024-07-30'
})
