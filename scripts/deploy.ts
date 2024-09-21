import process from 'node:process'

import { execa } from 'execa'

const NUXT_HUB_PROJECT_KEY = process.env.NUXT_HUB_PROJECT_KEY!
const NUXT_HUB_USER_TOKEN = process.env.NUXT_HUB_USER_TOKEN!

console.log('NUXT_HUB_PROJECT_KEY', NUXT_HUB_PROJECT_KEY.length)
console.log('NUXT_HUB_PROJECT_KEY', NUXT_HUB_USER_TOKEN.length)
console.log('NUXT_HUB_USER_TOKEN', process.env.NUXT_HUB_USER_TOKEN?.slice(-10))

await execa`cross-env NUXT_HUB_PROJECT_KEY="${NUXT_HUB_PROJECT_KEY}" cross-env NUXT_HUB_USER_TOKEN="${NUXT_HUB_USER_TOKEN}" npx nuxthub deploy --no-build`
