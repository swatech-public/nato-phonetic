#!/usr/bin/env node

import './lib/phonetic.js'

console.log(process.argv.slice(2).join(' ').toPhonetic())
