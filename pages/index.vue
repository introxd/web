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
  <div relative z-10 h-full fccc select-none>
    <div v-show="!visible" pa left-0 top-0 size-full fcc animate-fade-in>
      <div i-line-md-loading-loop size-16 bg-gradient-to-tr from="#bd34fe" to="#47caff" />
      <div size-0 select-none op-0 font-nunito>
        loading
      </div>
    </div>

    <div v-show="visible" pr w-full animate-fade-in animate-duration-330 text-center>
      <div relative top="lt-xs:-6 xs:-12 sm:-14 lg:-16" text="lt-xs:14 xs:16 sm:18 xl:24">
        <span bg-gradient-to-tr bg-clip-text text-transparent font-nunito from="#bd34fe" to="#47caff">
          Intro
        </span>
        <span>🤣</span>
      </div>

      <div pa top="lt-xs:14 xs:10 sm:10 md:10 lg:12" w-full fyc flex-col gap="lt-xs:4 xs:6">
        <div text="lt-sm:4 sm:5 xl:6 dark-1" w-full fcc gap-2 text-center lt-xs:flex-col>
          <span>定制个人简介页面，类似</span>
          <div fcc gap-2>
            <button
              pr hover="bg-clip-text text-transparent bg-gradient-to-tr" from="#bd34fe" to="#47caff"
              b="0 b dashed dark-1 hover:#bd34fe" clickable @click="router.push(currentUser.path)"
            >
              {{ currentUser.name }}
            </button>
            <div
              i-material-symbols-light-directory-sync-rounded size="lt-xs:6 xs:8" bg-gray clickable
              :class="refreshClicked ? 'animate-spin animate-count-1' : ''" @click="refresh"
            />
          </div>
        </div>

        <div fcc>
          <div fcc clickable @click="router.push('/more')">
            <div text-dark-1 font-bold>
              详情
            </div>
            <div i-material-symbols-arrow-right-rounded size-6 bg-dark-1 />
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div pf left-0 top-0 z-1 h-full w-full fcc>
        <div class="gradient" :class="!visible ? 'hide' : ''" />
      </div>
    </Teleport>

    <Teleport to="body">
      <div pf bottom-1 right-2 text="3 gray-3">
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
