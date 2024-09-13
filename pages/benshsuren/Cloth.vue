<template>
  <Title prefix="02" title="关于绘画布料" subtitle="CLOTH" :image reverse>
    <div font-linhai text-5 flex="~ col" gap-4>
      <div flex gap-2>
        <Heart />
        <div flex-1 text="#638167">
          <span>接花罗正绢</span>
          <span font-sans>绮</span>
          <span>絽丝麻等常见布料</span>
        </div>
      </div>

      <div flex gap-2>
        <Heart />
        <div flex-1 text="#638167">
          <span>不接毛呢和薄透软（包括但不限于欧根纱真丝</span>
          <span font-sans>绡</span>
          <span>）布料</span>
        </div>
      </div>

      <div flex gap-2>
        <Heart />
        <div flex-1 text="#638167">
          不能确定能不能画的，最好带衣服一小块边角料试色（实在没有也没关系）
        </div>
      </div>
    </div>
  </Title>
</template>

<script lang="ts" setup>
import Heart from './components/Heart.vue'
import Title from './components/Title.vue'
import image from '@/assets/images/benshsuren/cloth.png'
</script>
