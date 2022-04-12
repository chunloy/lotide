//import modules
const { countLetters } = require('../index');
const assert = require('chai').assert;

describe("#countLetters", () => {

  it("should return a count of 1 for 'h' in the sentence 'hello my name is aaron'", () => {
    const sentence = countLetters('hello my name is aaron');
    assert.strictEqual(sentence.h, 1);
  });

  it("should return a count of 2 for 'l' in the sentence 'hello my name is aaron'", () => {
    const sentence = countLetters('hello my name is aaron');
    assert.strictEqual(sentence.l, 2);
  });

  it("should return a count of 3 for 'a' in the sentence 'hello my name is aaron'", () => {
    const sentence = countLetters('hello my name is aaron');
    assert.strictEqual(sentence.a, 3);
  });

  it("should return undefined for spaces", () => {
    const sentence = countLetters('hello my name is aaron');
    assert.strictEqual(sentence[' '], undefined);

  });
});