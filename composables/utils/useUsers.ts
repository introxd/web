export interface User {
  name: string
  path: string
}

export const excludeUsers: string[] = [
  'more'
]

export default function () {
  const users: User[] = []

  const router = useRouter()
  const routers = router.getRoutes()

  _forEach(routers, (route) => {
    const name = route.name as string

    if (/^\/\w+$/.test(route.path) && !_includes(excludeUsers, name)) {
      users.push({
        name,
        path: route.path
      })
    }
  })

  return users
}
