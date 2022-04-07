const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const result = {}; //empty array to store letter count

  for (const letter of string) {

    if (letter === ' ') {
      continue;
    }

    if (!result[letter]) {
      result[letter] = 0; //if letter doesn't exist, include it
    }
    result[letter]++;

  }
  return result;
};

//test cases:
const result1 = countLetters('hello my name is aaron');

assertEqual(result1['h'], 1); //passed, OK
assertEqual(result1['l'], 2); //passed, OK
assertEqual(result1['a'], 3); //passed, OK
assertEqual(result1[' '], undefined); //passed OK