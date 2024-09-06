<template>
  <div relative w-full h-full>
    <div v-show="loading" absolute top-0 left-0 h-full w-full flex items-center justify-center>
      <div i-line-md-loading-loop h-16 w-16 bg-gray-2 />
    </div>

    <iframe v-show="!loading" ref="iframe" frameborder="0" h-full w-full animate-fade-in />
  </div>
</template>

<script lang="ts" setup>
const iframe = ref()
const loading = ref(true)

onMounted(() => {
  iframe.value.src = 'https://me.imba97.cn/resume'
  iframe.value.onload = () => {
    loading.value = false
  }
})
</script>
