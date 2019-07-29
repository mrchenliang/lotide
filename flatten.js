
const flatten = function(array) {
  let answer = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) answer.push(array[i][j]);
    } else answer.push(array[i]);
  }
  
  return answer;
};

module.exports = flatten;

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
