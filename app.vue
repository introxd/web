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
    <button v-show="appStore.showBackButton" fixed left-2 top-2 z-100 rounded-full bg-gray-2 p-1 @click="router.push('/')">
      <div i-ic-round-arrow-back h-6 w-6 bg-gray />
    </button>
  </div>
</template>

<script lang="ts" setup>
import '@introxd/components/style.css'
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
  meta: [
    {
      name: 'keywords',
      content: 'introxd,intro🤣,🤣,introduction,personal,profile,定制,简介,个人简介'
    },
    {
      name: 'description',
      content: 'Personal Profile Website, 个人简介网站, Intro 🤣'
    }
  ],
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
          src: '//sdk.51.la/js-sdk-pro.min.js',
          defer: true
        }
  ]
})

onMounted(() => {
  initAnalytics()
})
</script>
