//import modules
const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {

  it("should return [1, 2, 3] when passed [1, 'a', 2, 'b', 3, 'c']", () => {
    assert.deepEqual(without([1, 'a', 2, 'b', 3, 'c'], ['a', 'b', 'c', 'd', 'e']), [1, 2, 3]);
  });

  it("should not modify the original array", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);

  });

});