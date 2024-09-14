<template>
  <div relative h-full flex="~ col" items-center justify-center>
    <div v-show="!visible" absolute top-0 left-0 h-full w-full flex items-center justify-center animate-fade-in>
      <div i-line-md-loading-loop h-16 w-16 bg-gradient-to-tr from="#bd34fe" to="#47caff" />
    </div>

    <div v-show="visible" animate-duration-330 animate-fade-in>
      <div relative text="lt-sm:14 sm:20 xl:24">
        <span font-nunito bg-clip-text text-transparent bg-gradient-to-tr from="#bd34fe" to="#47caff">
          Intro
        </span>
        <span>🤣</span>
      </div>

      <div mt-4 text="lt-sm:4 sm:5 xl:6">
        <span>定制个人简介页面，类似</span>
        <button
          ml-2 relative hover="bg-clip-text text-transparent bg-gradient-to-tr" from="#bd34fe" to="#47caff"
          b="0 b dashed black hover:#bd34fe" active="scale-95" transition="transform"
          @click="router.push('/imba97')"
        >
          imba97
        </button>
      </div>
    </div>

    <Teleport to="body">
      <div fixed right-2 bottom-1 text="3 gray-3">
        v{{ version }}
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts" setup>
const { version } = usePackage()

const router = useRouter()

const visible = ref(false)

onNuxtReady(async () => {
  document.fonts.ready.then(() => {
    setTimeout(() => {
      visible.value = true
    }, 500)
  })
})
</script>
