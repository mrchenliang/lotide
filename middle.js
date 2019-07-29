const middle = function(array) {
  let answer = [];
  let mid = Math.floor(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 !== 0) {
      answer.push(array[mid]);
    } else {
      answer.push(array[(mid) - 1]);
      answer.push(array[(mid)]);
    }
}
return answer;
};

module.exports = middle;
