import process from 'node:process'

const isCloudflareMode = process.env.CLOUDFLARE_MODE !== 'false'

export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    ...(isCloudflareMode ? ['@nuxthub/core'] : [])
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

  ...(isCloudflareMode
    ? {
        hub: {
          kv: true
        }
      }
    : {
        nitro: {
          preset: 'node-server'
        }
      }),

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
