#!/usr/bin/env node

const Phonetic = require("./lib/nato-phonetic.js");

const str = new Phonetic(process.argv[2]);
console.log(str.toPhonetic());
