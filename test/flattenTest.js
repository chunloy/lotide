//import modules
const { flatten } = require('../index');
const assert = require('chai').assert;

describe("#flatten", () => {
  it("should return a flattened array for an array with a single level of nesting", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

});
