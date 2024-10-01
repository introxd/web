<style lang="scss" scoped>
.gradient {
  --size: 750px;
  --speed: 9s;
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);

  --uno: animate-spin animate-count-infinite animate-alternate;

  width: var(--size);
  height: var(--size);
  filter: blur(calc(var(--size) / 5));
  background-image: linear-gradient(#e0c3fc, #a0d8ff);
  animation: var(--speed) var(--easing);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  opacity: 0.75;
  transition: all 0.5s ease-out;

  &.hide {
    --size: 0;
    opacity: 0;
  }

  @media (min-width: 720px) {
    --size: 550px;
  }
}
</style>

<template>
  <div relative h-full flex="~ col" items-center justify-center z-10 select-none>
    <div v-show="!visible" absolute top-0 left-0 h-full w-full flex items-center justify-center animate-fade-in>
      <div i-line-md-loading-loop h-16 w-16 bg-gradient-to-tr from="#bd34fe" to="#47caff" />
      <div font-nunito op-0>
        loading
      </div>
    </div>

    <div v-show="visible" relative w-full text-center animate-duration-330 animate-fade-in>
      <div relative top="lt-xs:-6 xs:-8 sm:-10" text="lt-xs:14 xs:16 sm:18 xl:24">
        <span font-nunito bg-clip-text text-transparent bg-gradient-to-tr from="#bd34fe" to="#47caff">
          Intro
        </span>
        <span>🤣</span>
      </div>

      <div absolute top="lt-xs:14 xs:18 sm:24 md:24 xl:32" left="50%" translate-x="-50%" w-full flex items-center gap-2>
        <div flex items-center justify-center gap-2 text="lt-sm:4 sm:5 xl:6 dark-1" text-center w-full>
          <span>定制个人简介页面，类似</span>
          <button
            relative hover="bg-clip-text text-transparent bg-gradient-to-tr" from="#bd34fe" to="#47caff"
            b="0 b dashed dark-1 hover:#bd34fe" active="scale-95" transition="transform"
            @click="router.push(currentUser.path)"
          >
            {{ currentUser.name }}
          </button>
          <div
            i-material-symbols-light-directory-sync-rounded size-8 bg-gray active="scale-95" transition="transform"
            cursor-pointer :class="refreshClicked ? 'animate-spin animate-count-1' : ''" @click="refresh"
          />
        </div>
      </div>

      <div
        mt-8 flex items-center justify-center active="scale-95" transition="transform" cursor-pointer
        @click="router.push('/more')"
      >
        <div text-dark-1 font-bold>
          详情
        </div>
        <div i-material-symbols-arrow-right-rounded size-6 bg-dark-1 />
      </div>
    </div>

    <Teleport to="body">
      <div fixed top-0 left-0 h-full w-full flex items-center justify-center z-1>
        <div class="gradient" :class="!visible ? 'hide' : ''" />
      </div>
    </Teleport>

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
const appStore = useAppStore()

const visible = ref(false)

const refreshClicked = ref(false)

let usersData: User[] = []
let randomUserPool: User[] = []

const users = ref<User[]>([])
const user = ref<User | undefined>()

const currentUser = computed(() => ({
  name: _get(user.value, 'name', ''),
  path: _get(user.value, 'path', '')
}))

onNuxtReady(async () => {
  // 首屏
  const env = await useEnv()

  // 首屏跳转只执行一次
  if (!appStore.firstScreenOnce && !_isEmpty(env.FIRST_SCREEN)) {
    appStore.firstScreenOnce = true
    router.push(`/${env.FIRST_SCREEN}`)
    return
  }

  // 字体
  document.fonts.ready.then(() => {
    setTimeout(() => {
      visible.value = true
    }, 500)
  })
})

onMounted(() => {
  visible.value = false

  usersData = useUsers()
  users.value = _cloneDeep(usersData)
  randomUserPool = _cloneDeep(usersData)

  randomUser()
})

function randomUser() {
  if (_isEmpty(randomUserPool)) {
    randomUserPool = _cloneDeep(usersData)

    // 删除当前用户
    _remove(randomUserPool, { name: currentUser.value.name })
  }

  // 随机用户
  const index = _random(0, randomUserPool.length - 1)

  const [random] = _remove(randomUserPool, {
    name: randomUserPool[index].name
  })

  user.value = random
}

function refresh() {
  if (refreshClicked.value) {
    return
  }

  refreshClicked.value = true

  setTimeout(() => {
    refreshClicked.value = false
    randomUser()
  }, 800)
}
</script>
