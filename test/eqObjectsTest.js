//import modules
const { eqObjects } = require('../index');
const assert = require('chai').assert;

describe("#eqObjects", () => {

  it("should return true when comparing ab to ba", () => {
    const ab = { a: '1', b: '2' };
    const ba = { b: '2', a: '1' };
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("should return false when comparing ab to abc", () => {
    const ab = { a: '1', b: '2' };
    const abc = { a: '1', b: '2', c: '3' };
    assert.strictEqual(eqObjects(ab, abc), false);
  });

  it("should return true when comparing cd to dc", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it("should return false when comparing cd to cde", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cde = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(cd, cde), false);
  });

});