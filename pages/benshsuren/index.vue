<style lang="scss" scoped>
@keyframes float-image {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-1rem);
  }

  100% {
    transform: translateY(0);
  }
}

.float-images {
  img {
    --uno: absolute rounded-full b-4 b-white b-solid;
    animation: float-image 5s ease-in-out infinite;
  }
}
</style>

<template>
  <div h-full w-full of-y-auto bg="#f4eddf">
    <div v-show="!allReady" absolute top-0 left-0 h-full w-full flex items-center justify-center>
      <div fixed text-center font-linhai op-0 select-none>
        loading
      </div>
      <div i-line-md-loading-loop h-16 w-16 bg="#305f6f" />
    </div>

    <div v-show="allReady" relative prose ma py-4 px="lt-md:8 md:4">
      <!-- 定位元素 -->
      <div absolute top-20 right="lt-md:8 md:14" text="lt-md:8 md:10 #ede0cd" font-italic animate-fade-in>
        <div>AN HAO</div>
        <div>Hand drawn</div>
      </div>

      <div
        v-show="currentIndex >= 2" absolute top-55 left="lt-md:60% md:55%" translate-x="-50%" font-linhai
        text="lt-xs:6 lt-md:10 md:12 #305f6f" animate-fade-in
      >
        <div>安好</div>
        <div>手绘</div>
      </div>

      <div w-full absolute top-0 left="50%" translate-x="-50%" class="float-images">
        <div v-for="(item, index) in images" :key="item.src" animate-fade-in>
          <img
            :src="item.src" :style="[
              {
                top: `${index === 0 ? 5 : (index + 1) * 5}rem`,
                width: `${item.random}rem`,
                height: `${item.random}rem`,
              },
              (index % 2 === 0 ? {
                left: `calc(0.5rem + ${item.random * (index + 1)}px)`,
              } : {
                right: `calc(0.5rem + ${item.random * (index + 1)}px)`,
              }),
            ]"
          >
        </div>
      </div>

      <!-- margin top -->
      <div mt-110 />

      <!-- 文字 -->
      <div v-show="true || animateEnded" animate-fade-in flex="~ col" gap-4>
        <div font-linhai text-5 flex="~ col" gap-4>
          <div>
            <div grid="~ cols-[4rem_1fr]">
              <div text="#a74e54">
                常规
              </div>
              <div text="#638167">
                80 ~ 300
              </div>
            </div>

            <div grid="~ cols-[4rem_1fr]">
              <div text="#a74e54">
                工笔
              </div>
              <div text="#638167">
                120 ~ 500
              </div>
            </div>
          </div>

          <div flex gap-2>
            <Heart />
            <div flex-1 text="#638167">
              满百包车马普邮。具体根据绘画底布、绘画面积和绘画复杂程度来商定。
            </div>
          </div>

          <div flex gap-2>
            <Heart />
            <div flex-1 text="#638167">
              <span>包括但不限于罗、絽等</span>
              <span underline="~ 1 offset-4 wavy #a74e54">织物结构暗纹有孔的</span>
              <span>，正绢等提花膨织工艺</span>
              <span underline="~ 1 offset-4 wavy #a74e54">凹凸不平的</span>
              <span>，工费酌情加 10% ~ 30%，且无法画工笔。</span>
            </div>
          </div>
        </div>

        <div mt-4 flex="~ col" gap-4>
          <Drawing />
          <Cloth />
          <BasicFlow />
          <Wash />
          <Notes />
        </div>

        <div mt-4>
          <Notes />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Heart from './components/Heart.vue'
import Drawing from './Drawing.vue'
import Cloth from './Cloth.vue'
import BasicFlow from './BasicFlow.vue'
import Wash from './Wash.vue'
import Notes from './Notes.vue'

const images = ref<{
  src: string
  random: number
}[]>([])

const imagesTotal = 4

const currentIndex = ref(0)
const loadedImages: string[] = []

const ready = reactive({
  image: false,
  font: false
})

const allReady = computed(() => {
  return _values(ready).every(Boolean)
})

const animateEnded = ref(false)

// 字体
onMounted(async () => {
  document.fonts.ready.then(() => {
    ready.font = true
  })

  setTimeout(() => {
    ready.font = true
  }, 10000)
})

onMounted(async () => {
  for (let i = 1; i <= imagesTotal; i++) {
    const { default: src } = await import(`@/assets/images/benshsuren/float-${i}.png`)

    const image = new Image()

    await new Promise((resolve) => {
      image.onload = () => {
        loadedImages.push(src)
        resolve(true)
      }

      image.src = src
    })
  }

  ready.image = true

  for (let i = 1; i <= imagesTotal; i++) {
    currentIndex.value = i

    const src = loadedImages[i - 1]

    images.value.push({
      src,
      random: _random(i % 2 === 0 ? 4 : 8, i % 2 === 0 ? 6 : 9)
    })

    await new Promise(resolve => setTimeout(resolve, _random(800, 1200)))
  }

  animateEnded.value = true
})
</script>
