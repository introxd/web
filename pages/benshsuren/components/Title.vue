<template>
  <div>
    <div flex items-center gap-4>
      <div font-italic text="7 #638167">
        <span relative before="content-empty absolute top-[-10%] right--1 w-1px h-120% rotate-10 bg-[#638167]">
          01
        </span>
      </div>

      <div flex="~ col">
        <div text="6 #71706a">
          关于绘画
        </div>
        <div tracking-3 text="#638167">
          DRAWING
        </div>
      </div>
    </div>
    <div mt-4>
      <slot />
    </div>
  </div>
</template>
