//import modules
const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {

  it("should return the first letter of each word in the array", () => {
    const words = ['ground', 'control', 'to', 'major', 'tom'];
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });

  it("should add 5 to each item in the array", () => {
    const nums = [9, 8, 7, 45, 33, 2, 1];
    assert.deepEqual(map(nums, x => x + 5), [14, 13, 12, 50, 38, 7, 6]);
  });

  it("should convert each item in the array to a string", () => {
    const nums = [9, 8, 7, 45, 33, 2, 1];
    assert.deepEqual(map(nums, x => String(x)), ["9", "8", "7", "45", "33", "2", "1"]);
  });

  it("should not modify the original array", () => {
    const nums = [9, 8, 7, 45, 33, 2, 1];
    map(nums, x => String(x));
    assert.deepEqual([9, 8, 7, 45, 33, 2, 1], [9, 8, 7, 45, 33, 2, 1]);
  });
});