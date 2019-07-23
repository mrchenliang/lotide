// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)

const assertArraysEqual = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
    }
  }
  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

// TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false

const flatten = function(array) {
  let answer = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) answer.push(array[i][j]);
    } else answer.push(array[i]);
  }
  return console.log(answer);
};

// flatten([1, [2, [3]], [4]]); // => [1,2,3,4]
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
