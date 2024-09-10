<template>
  <div>
    <div flex items-center justify-between>
      <div flex items-center gap-4>
        <div font-italic text="7 #638167">
          <span relative before="content-empty absolute top-[-10%] right--1 w-1px h-120% rotate-10 bg-[#638167]">
            {{ props.prefix }}
          </span>
        </div>

        <div flex="~ col">
          <div text="6 #71706a">
            {{ props.title }}
          </div>
          <div tracking-3 text="#638167">
            {{ props.subtitle }}
          </div>
        </div>
      </div>

      <div>
        <img :src="image" size-32 rounded-full b="4 white solid">
      </div>
    </div>
    <div mt-4>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  prefix: string
  title: string
  subtitle: string
  image: string
}>()
</script>
