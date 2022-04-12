//import modules
const { takeUntil } = require('../index');
const assert = require('chai').assert;

describe("#takeUntil", () => {

  it("should return [1, 2, 5, 7, 2] when passed [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(data, x => x < 0), [1, 2, 5, 7, 2]);
  });

  it("should return ['I've', 'been', 'to', 'Hollywood'] when passed ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood']", () => {
    const data = ['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood'];
    assert.deepEqual(takeUntil(data, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
  });

  it("should return [] when passed callback is x => x > 0", () => {
    const data = [12, 24, 56, 78, 29, -17, 25, 43, 51];
    assert.deepEqual(takeUntil(data, x => x > 0), []);
  });

});