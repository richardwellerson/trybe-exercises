let assert = require('assert')

function mySum(arr) {
  return arr.reduce((total, current) => { return total + current }, 0)
}

assert.strictEqual(mySum([1, 2, 3, 4]), 10)
assert.strictEqual(mySum([1, -2, -3, 4]), 0)
