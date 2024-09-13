<template>
  <div flex items-center :class="hasDefaultSlot ? 'gap-2' : ''">
    <div
      flex items-center justify-center rounded-lg bg="#ff2442"
      :size="props.size || '16'"
      @click="openXiaoHongShu"
    >
      <div i-simple-icons-xiaohongshu size="80%" bg-white />
    </div>

    <div @click="openXiaoHongShu">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  user: string
  size?: string
}>()

const slots = defineSlots()

const hasDefaultSlot = computed(() => !!slots.default)

async function openXiaoHongShu() {
  const isOpend = await canOpenUrl(`xhsdiscover://user/${props.user}`)

  if (!isOpend) {
    window.open(`https://www.xiaohongshu.com/user/profile/${props.user}`)
  }
}

function canOpenUrl(schemeUrl: string) {
  return new Promise<boolean>((resolve) => {
    // 创建一个隐藏的 iframe
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    document.body.appendChild(iframe)

    let isHandlerRegistered = false

    // 设置一个定时器，如果在 3 秒内没有跳转，认为不能处理该 scheme
    const timer = setTimeout(() => {
    // 如果没有打开应用程序，执行回调，表示无法处理该 URL
      isHandlerRegistered = false
      resolve(isHandlerRegistered)
      document.body.removeChild(iframe)
    }, 3000) // 超时设置为 3 秒

    // 尝试加载自定义 scheme URL
    try {
      iframe.src = schemeUrl
    }
    // eslint-disable-next-line unused-imports/no-unused-vars
    catch (e) {
      clearTimeout(timer)
      isHandlerRegistered = false
      resolve(isHandlerRegistered)
      document.body.removeChild(iframe)
      return
    }

    // 监听页面的 `visibilitychange` 事件，应用程序切换到后台时，认为成功
    document.addEventListener('visibilitychange', function onVisibilityChange() {
      if (document.hidden) {
      // 如果页面进入后台，说明成功打开了应用程序
        clearTimeout(timer)
        isHandlerRegistered = true
        resolve(isHandlerRegistered)
        document.body.removeChild(iframe)
        document.removeEventListener('visibilitychange', onVisibilityChange)
      }
    })
  })
}
</script>
