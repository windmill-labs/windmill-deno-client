'use strict'

const {normalize, sep: separator} = require('path')

const withoutDot = s => s !== '.'
const withoutEmpty = s => s.length > 0
const computeLevel = (acc, s) => s === '..' ? acc - 1 : acc + 1

const pathDepth = (path) => {
	if (path === '') return 0
	return normalize(path)
	.split(separator)
	.filter(withoutDot)
	.filter(withoutEmpty)
	.reduce(computeLevel, 0)
}

module.exports = pathDepth
