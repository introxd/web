export interface User {
  name: string
  path: string
}

export default function () {
  const users: User[] = []

  const router = useRouter()
  const routers = router.getRoutes()

  _forEach(routers, (route) => {
    if (/^\/\w+$/.test(route.path)) {
      users.push({
        name: route.name as string,
        path: route.path
      })
    }
  })

  return users
}
