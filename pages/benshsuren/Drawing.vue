<template>
  <Title prefix="01" title="关于绘画" subtitle="DRAWING" :image>
    <div font-linhai text-5 flex="~ col" gap-4>
      <div flex gap-2>
        <div i-material-symbols-check-rounded relative top-1 h-6 w-6 bg="#a74e54" />
        <div flex-1 text="#638167">
          <span>基本是</span>
          <span underline="~ 1 offset-4 wavy #a74e54">传统国画画风</span>
          <span>，擅长花卉植物，蝴蝶蜻蜓昆虫，山石游鱼小景，简单传统建筑。</span>
        </div>
      </div>

      <div flex gap-2>
        <div i-material-symbols-check-rounded relative top-1 h-6 w-6 bg="#a74e54" />
        <div flex-1 text="#638167">
          <span>可以画</span>
          <span underline="~ 1 offset-4 wavy #a74e54">水彩风格</span>
          <span>，</span>
          <span bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange>五</span>
          <span bg-clip-text text-transparent bg-gradient-to-r from-yellow to-green>彩</span>
          <span bg-clip-text text-transparent bg-gradient-to-r from-blue to-indigo>斑</span>
          <span font-sans bg-clip-text text-transparent bg-gradient-to-r from-indigo to-purple>斓</span>
          <span>的</span>
          <span text-black>黑</span>
          <span text-white bg-dark rounded-1>白</span>
          <span bg-clip-text text-transparent bg-gradient-to-r from="#7583ab" to="#7a528d">七彩</span>
          <span>都行。</span>
        </div>
      </div>

      <div flex gap-2>
        <div i-mdi-checkbox-blank-circle-outline relative top-1 h-6 w-6 bg="#a74e54" />
        <div flex-1 text="#638167">
          书法一般，什么都能写点，但是不专业。
        </div>
      </div>

      <div flex gap-2>
        <div i-radix-icons-cross-2 relative top-1 h-6 w-6 bg="#a74e54" />
        <div flex-1 text="#638167">
          不画人、大型动物和轴对称图案。
        </div>
      </div>

      <div flex gap-2>
        <div i-material-symbols-favorite-rounded relative top-1 h-6 w-6 animate="heart-beat count-infinite" bg="#a74e54" />
        <div flex-1 text="#638167">
          对绘画有执念，要么不画要么画好，偶尔会有巧思。画风如图，婉拒暴发户审美。会对配色提出建议，但具体决定你说了算 ~
        </div>
      </div>
    </div>
  </Title>
</template>

<script lang="ts" setup>
import Title from './components/Title.vue'
import image from '@/assets/images/benshsuren/drawing.png'
</script>
