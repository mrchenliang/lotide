const assertArraysEqual = require('./assertArraysEqual')

const without = function(array, values) {
  let answer = array;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < values.length; j++) {
      if (array[i] === values[j]) answer.splice(i, 1);
    }
  }
  return answer;
};

module.exports = without;

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
