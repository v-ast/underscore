const cb = require('./cb');
const getLength = require('./_arrayHelper').getLength;

// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
module.exports = function(array, obj, iteratee, context) {
  iteratee = cb(iteratee, context, 1);
  var value = iteratee(obj);
  var low = 0, high = getLength(array);
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
  }
  return low;
};