import process from 'node:process'

import { exec } from 'node:child_process'

const [, , NUXT_HUB_PROJECT_KEY, NUXT_HUB_USER_TOKEN] = process.argv

console.log('NUXT_HUB_PROJECT_KEY', NUXT_HUB_PROJECT_KEY.length)
console.log('NUXT_HUB_PROJECT_KEY', NUXT_HUB_USER_TOKEN.length)
console.log('NUXT_HUB_USER_TOKEN', process.env.NUXT_HUB_USER_TOKEN?.slice(-10))

exec(`cross-env NUXT_HUB_PROJECT_KEY="${NUXT_HUB_PROJECT_KEY}" cross-env NUXT_HUB_USER_TOKEN="${NUXT_HUB_USER_TOKEN}" npx nuxthub deploy --no-build`)
