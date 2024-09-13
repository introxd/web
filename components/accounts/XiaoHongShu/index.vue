<template>
  <div
    flex items-center justify-center rounded-lg bg="#ff2442"
    :size="props.size || '16'"
    @click="openUrl(`xhsdiscover://user/${props.user}`)"
  >
    <div i-simple-icons-xiaohongshu size="80%" bg-white />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  user: string
  size?: string
}>()

function openUrl(url: string) {
  window.open(url, '_self')
}
</script>
