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
findKey
};
console.log(module.exports)