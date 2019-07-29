// FUNCTION IMPLEMENTATION
const tail = function(array) {
  if (array === null) {
    return "undefined";
  } else return array.slice(1);
};

module.exports = tail; 