<template>
  <div relative mt="lt-md:10 md:14" p-6 bg-white text="#638167" font-linhai rounded-sm shadow-sm>
    <div absolute top="lt-md:-12 md:-14" left="50%" translate-x="-50%">
      <img :src="image" size="lt-md:24 md:28" rounded-full>
    </div>

    <div mt="lt-md:10 md:14" mb-14 text="6 center" underline="~ 3 offset-26 #dbb577">
      碎碎念
    </div>

    <div flex="~ col" gap-4>
      <div>
        非科班出身，常年学习中，幸得大家喜爱接单几年，非全职接单
      </div>

      <div flex gap-2>
        <div i-material-symbols-check-rounded relative top-0 h-6 w-6 bg="#a74e54" />
        <div flex-1>
          <span>擅长传统国画和水彩风格，擅长花鸟鱼虫，可以古典建筑和小兽，可以写隶</span>
          <span font-sans>篆</span>
          <span>楷行瘦金，搞不来人物、大动物和草书</span>
        </div>
      </div>

      <div flex gap-2>
        <div i-radix-icons-cross-2 relative top-0 h-6 w-6 bg="#a74e54" />
        <div flex-1>
          <span>不擅长的画风会拒绝，</span>
          <span underline="~ 1 offset-4 wavy #a74e54">不画和风、婉拒画满</span>
        </div>
      </div>

      <div>
        有拖延症 orz 急用提前说明，可以催！！不要不好意思！！
      </div>

      <div>
        日常画画不太看手机，作息不规律看见就回 ~ 如果 24 小时没有回复可能是消息多顶掉了，辛苦再戳一下
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import image from '@/assets/images/benshsuren/gossip.png'
</script>
