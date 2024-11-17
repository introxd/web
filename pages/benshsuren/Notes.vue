<template>
  <Title prefix="05" title="注意事项" subtitle="NOTES" :image>
    <div flex="~ col" gap-4 text-5 font-linhai>
      <div v-for="(note, index) in notes" :key="index" flex gap-2>
        <Heart />
        <div flex-1 text="#638167">
          {{ note }}
        </div>
      </div>

      <div text="#a74e54 center">
        <div>排单视为接受以上内容</div>
        <div>解释权归安好所有</div>
      </div>
    </div>
  </Title>
</template>

<script lang="ts" setup>
import image from '@/assets/images/benshsuren/notes.png'

import Heart from './components/Heart.vue'
import Title from './components/Title.vue'

const notes = [
  '纹理起伏很大的布料无法画的很细致，大面积绘画部分会发硬，颜料透底和小范围晕染无法避免',
  '金属色颜料因固色度低于其他颜料，一年内免费补色，不包车马',
  '来图定制需自己有授权，无授权涉及版权纠纷，不接受此类绘画',
  '请提前说明想什么时间穿，安好会出现身体不适、家里有事儿耽误工期现象，避免耽误你穿哦',
  '理论上不接加急，不接受插队，特殊情况除外'
]
</script>
