<template>
  <div h-full flex="~ col" items-center justify-center>
    <div text="lt-sm:18 sm:20 xl:24">
      <span font-nunito bg-clip-text text-transparent bg-gradient-to-tr from="#bd34fe" to="#47caff">
        Intro
      </span>
      <span>🤣</span>
    </div>

    <div mt-4 text-5>
      <span>定制个人简介页面，类似</span>
      <a
        href="/imba97" ml-2 b="0 b-1 dashed black hover:#bd34fe"
        hover="bg-clip-text text-transparent bg-gradient-to-tr" from="#bd34fe" to="#47caff"
      >imba97</a>
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
</script>
