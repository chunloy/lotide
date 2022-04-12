//import modules
const { letterPositions } = require('../index');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("should return the correct indices of each letter in 'hello'", () => {
    assert.deepEqual(letterPositions('hello'), { h: [0], e: [1], l: [2, 3], o: [4] });
  });
});