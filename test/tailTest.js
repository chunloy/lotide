//importing modules
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); //use deep equal for arrays/objects
  });

  it("should return a new array and not modify the original", () => {
    const originalArray = ['Hello', 'Lighthouse', 'Labs'];
    tail(originalArray);
    assert.deepEqual(originalArray, originalArray);
  });

  it("should return [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("should return [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});