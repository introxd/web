import process from 'node:process'

import { spawn } from 'node:child_process'

spawn('npx', ['nuxthub', 'deploy', '--no-build'], {
  shell: true,
  stdio: 'inherit',

  env: {
    CLOUDFLARE_MODE: 'true',
    NUXT_HUB_PROJECT_KEY: process.env.NUXT_HUB_PROJECT_KEY,
    NUXT_HUB_USER_TOKEN: process.env.NUXT_HUB_USER_TOKEN
  }
})
