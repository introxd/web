<style lang="scss">
html,
body,
#__nuxt {
  --uno: h-full;
}
</style>

<template>
  <div h-full w-full flex="~ col">
    <NuxtPage />
    <button v-show="appStore.showBackButton" fixed top-2 left-2 p-1 bg-gray-2 rounded-full z-100 @click="router.push('/')">
      <div i-ic-round-arrow-back h-6 w-6 bg-gray />
    </button>
  </div>
</template>

<script lang="ts" setup>
import 'uno.css'
import '@/assets/styles/main.css'

import { initAnalytics } from './utils/analytics/51.la'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

watch(() => route.path, () => {
  appStore.showBackButton = route.path !== '/'
}, {
  immediate: true
})

useHead({
  title: 'Intro 🤣',
  htmlAttrs: {
    lang: 'zh'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ],
  script: [
    import.meta.dev
      ? {}
      : {
          id: 'LA_COLLECT',
          src: '//sdk.51.la/js-sdk-pro.min.js'
        }
  ]
})

onMounted(() => {
  initAnalytics()
})
</script>
