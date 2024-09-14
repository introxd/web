let env: Record<string, any>

export async function useEnv(): Promise<Record<string, any>> {
  if (env) {
    return Promise.resolve(env)
  }

  return new Promise((resolve) => {
    onNuxtReady(async () => {
      const { data } = await useFetch('/api/getEnv')

      env = data.value || {}

      resolve(env)
    })
  })
}
