const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let finder1 = Object.keys(object1);
  let finder2 = Object.keys(object2);
  
  if (finder1.length === finder2.length) {
    for (const item of finder2) {
      if (object1[item] !== object2[item]) {
        if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
          if (!eqArrays(object1[item], object2[item])) {
            return false;
          } else if (eqObjects(object1[item], object2[item])) {
            return true;
          }
        }

        return false;
      }
    }
    return true;
  }
  return false;
};

module.exports = eqObjects;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
