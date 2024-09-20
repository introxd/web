import process from 'node:process'
import { spawn } from 'node:child_process'

const child = spawn('npx', ['nuxi', 'build'])

child.stdout.on('data', (data) => {
  process.stdout.write(data)

  if (~data.indexOf('npx nuxthub deploy')) {
    console.log('Build Success')
    setTimeout(() => {
      process.exit(0)
    }, 3000)
  }
})

child.on('close', (code) => {
  console.log(`子进程退出，退出码 ${code}`)
})
