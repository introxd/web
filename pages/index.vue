<template>
  <div relative h-full flex="~ col" items-center justify-center>
    <div v-show="!visible" absolute top-0 left-0 h-full w-full flex items-center justify-center animate-fade-in>
      <div i-line-md-loading-loop h-16 w-16 bg-gradient-to-tr from="#bd34fe" to="#47caff" />
    </div>

    <div v-show="visible" relative w-full text-center animate-duration-330 animate-fade-in>
      <div relative top="lt-xs:-6 xs:-8 sm:-10" text="lt-xs:14 xs:16 sm:18 xl:24">
        <span font-nunito bg-clip-text text-transparent bg-gradient-to-tr from="#bd34fe" to="#47caff">
          Intro
        </span>
        <span>🤣</span>
      </div>

      <div absolute top="lt-xs:14 xs:18 sm:24 md:24 xl:32" left="50%" translate-x="-50%" w-full flex items-center gap-2>
        <div text="lt-sm:4 sm:5 xl:6" text-center w-full>
          <span>定制个人简介页面，类似</span>
          <button
            ml-2 relative hover="bg-clip-text text-transparent bg-gradient-to-tr" from="#bd34fe" to="#47caff"
            b="0 b dashed black hover:#bd34fe" active="scale-95" transition="transform"
            @click="router.push(currentUser.path)"
          >
            {{ currentUser.name }}
          </button>
        </div>
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
const appStore = useAppStore()

const visible = ref(false)

let usersData: User[] = []
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
  usersData = useUsers()
  users.value = _cloneDeep(usersData)

  randomUser()
})

function randomUser() {
  user.value = _get(users.value, _random(0, usersData.length - 1))
}
</script>
