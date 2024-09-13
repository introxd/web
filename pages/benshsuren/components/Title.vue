<template>
  <div>
    <div flex items-center justify-between>
      <div v-if="hasImage && props.reverse">
        <img :src="image" inline lt-xs="hidden" size="lt-md:20 md:32" rounded-full b="4 white solid" shadow-sm>
      </div>

      <div flex items-center gap-4>
        <div font-italic text="lt-md:8 md:10 #638167">
          <div relative>
            <div>
              {{ props.prefix }}
            </div>

            <div absolute top="-5%" right--2 lt-md:w-1px md:w-2px h="110%" rotate-10 bg="#638167" />
          </div>
        </div>

        <div flex="~ col">
          <div text="lt-md:5 md:6 #71706a">
            {{ props.title }}
          </div>
          <div tracking="lt-md:2 md:3" text="#638167">
            {{ props.subtitle }}
          </div>
        </div>
      </div>

      <div v-if="hasImage && !props.reverse">
        <img :src="image" inline lt-xs="hidden" size="lt-md:20 md:32" rounded-full b="4 white solid" shadow-sm>
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
  image?: string
  reverse?: boolean
}>()

const hasImage = computed(() => !!props.image)
</script>
