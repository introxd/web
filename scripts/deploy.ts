import process from 'node:process'

console.log('NUXT_HUB_PROJECT_KEY', process.env.NUXT_HUB_PROJECT_KEY?.length)
console.log('NUXT_HUB_USER_TOKEN', process.env.NUXT_HUB_USER_TOKEN?.length)

console.log('NUXT_HUB_USER_TOKEN', process.env.NUXT_HUB_PROJECT_KEY?.slice(-10))
