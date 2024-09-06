<template>
  <div v-show="visible" h-full flex="~ col" items-center justify-center animate="duration-330 fade-in">
    <div relative text="lt-sm:14 sm:20 xl:24">
      <span font-nunito bg-clip-text text-transparent bg-gradient-to-tr from="#bd34fe" to="#47caff">
        Intro
      </span>
      <span>🤣</span>
    </div>

    <div mt-4 text="lt-sm:4 sm:5 xl:6">
      <span>定制个人简介页面，类似</span>
      <a
        href="/imba97" ml-2 relative hover="bg-clip-text text-transparent bg-gradient-to-tr" from="#bd34fe"
        to="#47caff"
        after="content-empty absolute bottom--0.5 left-0 w-full h-1px bg-black hover:bg-gradient-to-r from-#bd34fe to-#47caff"
      >imba97</a>
    </div>

    <Teleport to="body">
      <div fixed right-2 bottom-1 text="3 gray-3">
        v{{ version }}
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts" setup>
const { version } = usePackage()

const visible = ref(false)

const fontUrl = new URL('@/assets/fonts/Nunito-Medium.ttf', import.meta.url).href

onNuxtReady(() => {
  const fontFace = new FontFace('Nunito-Medium', `url(${fontUrl})`, {
    style: 'normal',
    weight: '500'
  })

  fontFace.loaded.then(() => {
    visible.value = true
  })

  fontFace.load()
})
</script>
