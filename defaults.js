const fs = require('fs-extra')

const keys = require('./keys.json')
const en = require('./langs/en.json')

keys.forEach(key => {
  if (!en[key]) en[key] = key

  fs.ensureFileSync('./langs/en.json')
  fs.writeJsonSync('./langs/en.json', en, { spaces: 2 })
})
