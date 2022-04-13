//import module
const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {

  it("should return the correct count of each item in a list as specified in the object", () => {

    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const namesToCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

    assert.deepEqual(countOnly(firstNames, namesToCount), { Fang: 2, Jason: 1 });
  });
});