<template>
  <div pr size-full>
    <div v-show="loading" pa left-0 top-0 size-full fcc>
      <div i-line-md-loading-loop size-16 bg-gray-2 />
    </div>

    <iframe v-show="!loading" ref="iframe" frameborder="0" size-full animate-fade-in />
  </div>
</template>

<script lang="ts" setup>
const iframe = ref()
const loading = ref(true)

onMounted(() => {
  iframe.value.src = 'https://imba97.me/resume'
  iframe.value.onload = () => {
    loading.value = false
  }
})
</script>
