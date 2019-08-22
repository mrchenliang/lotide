// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  if (
    !(array1 instanceof Array) ||
    !(array2 instanceof Array) ||
    array1.length !== array2.length
  ) {
    return false;
  } else {
    let index = array1.length;
    while (index > 0) {
      index--;
      if (array1[index] instanceof Array || array2[index] instanceof Array) {
        if (!eqArrays(array1[index], array2[index])) {
          return false;
        }
      } else if (array1[index] !== array2[index]) {
        return false;
      }
    }
    return true;
  }
};

module.exports = eqArrays;

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
