#!/usr/bin/env node

require('./lib/phonetic.js')

console.log(process.argv.slice(2).join(' ').toPhonetic())
