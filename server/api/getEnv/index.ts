import process from 'node:process'

export default defineEventHandler(async () => {
  return [
    'FIRST_SCREEN'
  ].reduce((acc, key) => {
    acc[key] = process.env[key]
    return acc
  }, {} as Record<string, any>)
})
