<template>
  <Title prefix="04" title="可浣洗" subtitle="WASH" :image reverse>
    <div font-linhai text-5 flex="~ col" gap-4>
      <div flex gap-2>
        <Heart />
        <div flex-1 text="#638167">
          <span>手绘颜料为丝绸纺织颜料 + 纺织颜料 + 丙</span>
          <span font-sans>烯</span>
          <span>混用，不能长时间浸泡和反复搓洗及高温</span>
          <span font-sans>熨</span>
          <span>烫，无其他注意事项，根据衣服底布护理就好</span>
        </div>
      </div>
    </div>
  </Title>
</template>

<script lang="ts" setup>
import Heart from './components/Heart.vue'
import Title from './components/Title.vue'
import image from '@/assets/images/benshsuren/wash.png'
</script>
