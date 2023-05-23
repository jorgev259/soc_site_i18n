const fs = require('fs-extra')

const langs = require('./langs.json')
const keys = require('./keys.json')
const en = require('./langs/en.json')

langs.forEach(lang => {
  const langFilePath = `langs/${lang}.json`
  const newFile = !fs.existsSync(langFilePath)
  const langFile = newFile ? {} : require(`./${langFilePath}`)

  let add = false
  let remove = false

  keys.forEach(k => {
    if (!langFile[k]) {
      add = true
      langFile[k] = ''
    }
  })

  Object.keys(langFile)
    .forEach(k => {
      if (!en[k]) {
        remove = true
        delete langFile[k]
      }
    })

  if (add || remove) {
    if (newFile) fs.ensureFileSync(langFilePath)
    fs.writeJsonSync(langFilePath, langFile, { spaces: 2 })
  }
})
