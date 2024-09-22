import fs from 'fs-extra'

fs.copyFileSync(
  'scripts/data.mjs',
  'node_modules/nuxthub/src/utils/data.mjs'
)
