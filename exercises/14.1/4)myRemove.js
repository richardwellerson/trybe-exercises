let assert = require('assert')

function myRemove(arr, item) {
  var ret = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] !== item) {
      ret.push(arr[i]);
    }
  }

  return ret;
}

assert.deepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
assert.deepEqual(myRemove([1, 2, 3, 4]), [1, 2, 3, 4]);
assert.deepEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4])

