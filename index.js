// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const without = require('./without');
const flatten = require('./flatten');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const findKeyByValue = require('./findKeyByValue');
const letterPosition = require('./letterPositions');
const takeUntil = require('./takeUntil');
const map = require('./maps');
const findKey = require('./findKey');
const assertArraysEqual = require('./assertArraysEqual')
const assertEqual = require('./assertEqual')
const assertObjectsEqual = require('./assertObjectsEqual')
const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')

module.exports = {
head,
tail,
middle,
without,
flatten,
countOnly,
countLetters,
findKeyByValue,
letterPosition,
takeUntil,
map,
findKey,
assertArraysEqual,
assertEqual,
assertObjectsEqual,
eqArrays,
eqObjects,
};
console.log(module.exports)