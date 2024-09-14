/* eslint-disable node/prefer-global/process */
export default defineEventHandler(async () => {
  return process.env.FIRST_SCREEN
})
