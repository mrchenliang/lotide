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
const map = require('./map');
const findKey = require('./findKey');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  without: without,
  flatten: flatten,
  countOnly: countOnly,
  countLetters: countLetters,
  findKeyByValue: findKeyByValue,
  letterPosition: letterPosition,
  takeUntil: takeUntil,
  map: map,
  findKey: findKey,
};