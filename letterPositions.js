
const assertArraysEqual = function(arrayOne, arrayTwo) {
  console.log((eqArrays(arrayOne, arrayTwo) ?
    `🟢 Assertion Passed: [${arrayOne}] === [${arrayTwo}]` : `🔴 Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`));
};

const eqArrays = function(arrayOne, arrayTwo) {
  //check if lengths match
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  //check if elements match
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  const results = {}; //empty obhect to store an indices of each letter

  for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] === ' ') {
      continue; //skip to next letter if there's a space
    }

    if (!results[sentence[i]]) {
      results[sentence[i]] = []; //create a new key if it doesn't already exist
    }

    results[sentence[i]].push(i);
  }
  return results;
};

//test cases:
const results1 = letterPositions('hello');
assertArraysEqual(results1['h'], [0]);
assertArraysEqual(results1['e'], [1]);
assertArraysEqual(results1['l'], [2, 3]);
assertArraysEqual(results1['o'], [4]);

const results2 = letterPositions('hello my name is aaron');
assertArraysEqual(results2['m'], [6, 11]);
assertArraysEqual(results2['i'], [14]);


