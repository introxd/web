import process from 'node:process'

import { spawn } from 'node:child_process'

const [, , NUXT_HUB_PROJECT_KEY, NUXT_HUB_USER_TOKEN] = process.argv

console.log('NUXT_HUB_PROJECT_KEY', NUXT_HUB_PROJECT_KEY.length)
console.log('NUXT_HUB_PROJECT_KEY', NUXT_HUB_USER_TOKEN.length)

spawn('npx', ['nuxthub', 'deploy', '--no-build'], {
  shell: true,
  stdio: 'inherit',

  env: {
    ...process.env,
    CLOUDFLARE_MODE: 'true',
    NUXT_HUB_PROJECT_KEY,
    NUXT_HUB_USER_TOKEN
  }
})
