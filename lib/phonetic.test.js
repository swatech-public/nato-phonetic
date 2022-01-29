const { test } = require('@jest/globals')
const expectExport = require('expect')
const Phonetic = require('./phonetic')


test('Converts string to NATO phonetic alphabet', () => {
	let str = new Phonetic('wn')
	expect(str.toPhonetic()).toBe('Whiskey November')
})