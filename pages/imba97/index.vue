<template>
  <div pr size-full>
    <div v-show="loading" pa top-0 left-0 size-full fcc>
      <div i-line-md-loading-loop size-16 bg-gray-2 />
    </div>

    <iframe v-show="!loading" ref="iframe" frameborder="0" size-full animate-fade-in />
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
