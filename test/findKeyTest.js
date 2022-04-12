//import modules
const {findKey} = require('../index');
const assert = require('chai').assert;

describe("#findKey", () => {
  it("should return 'noma' if callback is x.stars === 2", () => {
    const starsList = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    };

    assert.strictEqual(findKey(starsList, x => x.stars === 2), 'noma');
  });
  
  it("should return 'Blue Hill' if callback is x.stars > 2", () => {
    const starsList = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    };

    assert.strictEqual(findKey(starsList, x => x.stars > 0), 'Blue Hill');
  });
  
  it("should return undefined if callback is not satisfied", () => {
    const starsList = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    };

    assert.strictEqual(findKey(starsList, x => x.stars > 10), undefined);
  });
});