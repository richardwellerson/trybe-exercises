let assert = require('assert')

function myIndexOf(arr, item) {
  
  return arr.findIndex(element => { 
    return element === item })
}

assert.strictEqual(myIndexOf([1,2,3,4], 3), 2)
assert.strictEqual(myIndexOf([1,2,3,4] ,5), -1)
