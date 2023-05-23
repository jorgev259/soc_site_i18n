const fs = require('fs-extra')

const langs = require('./langs.json')
const keys = require('./keys.json')

const bundle = {}

langs.forEach(lang => {
  if (!bundle[lang]) bundle[lang] = {}
  bundle[lang] = require(`./langs/${lang}.json`)
})

Object.keys(bundle).forEach(lang => {
  fs.ensureFileSync(`build/langs/${lang}.json`)
  fs.writeJsonSync(`build/langs/${lang}.json`, bundle[lang])
})

fs.ensureFileSync('build/keys.json')
fs.writeJsonSync('build/keys.json', keys)
