<template>
  <Title prefix="03" title="关于约稿流程" subtitle="BASIC FLOW" :image>
    <div font-linhai text-5 flex="~ col" gap-4>
      <div flex gap-2>
        <Heart />
        <div flex-1 text="#638167">
          <div>甲 ：定期开团</div>

          <div text="4.3">
            <div>① 确定开团团 （配色不限）</div>
            <div>② 限定件数开接龙</div>
            <div>③ 定金 10 元每件</div>
            <div>④ 一个月内寄出衣服 （逾期不退）</div>
            <div>⑤ 工期一个月内</div>
            <div>PS: 周期性混团</div>
          </div>
        </div>
      </div>

      <div flex gap-2>
        <Heart />
        <div flex-1 text="#638167">
          <div>乙 ：定制</div>

          <div text="4.3">
            <div>① 交流绘画内容和位置</div>
            <div>② 出 1 ~ 2 个草图、配色并大体报价位</div>
            <div>③ 确定细稿</div>
            <div>④ 上衣服绘画</div>
            <div>⑤ 画完付款</div>
          </div>
        </div>
      </div>

      <div flex gap-2>
        <Heart />
        <div flex-1 text="#638167">
          <div>丙 ：有授权或约稿的来图定制</div>
        </div>
      </div>
    </div>
  </Title>
</template>

<script lang="ts" setup>
import Heart from './components/Heart.vue'
import Title from './components/Title.vue'
import image from '@/assets/images/benshsuren/basic-flow.png'
</script>
