const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

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

//test case: return only the first letter from each word
const words = ['ground', 'control', 'to', 'major', 'tom'];
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']); //passed, OK

//test case: add 5 to each element
const nums = [9, 8, 7, 45, 33, 2, 1];
assertArraysEqual(map(nums, x => x + 5), [14, 13, 12, 50, 38, 7, 6]); //passed, OK

//test case: convert numbers to strings
const nums2 = [9, 4, 22, 45, 33, 18, 5];
assertArraysEqual(map(nums2, x => String(x)), ['9', '4', '22', '45', '33', '18', '5']); //passed, OK

//test case: original array remains unchanged
const words2 = ['ground', 'control', 'to', 'tic tac', 'jerry'];
assertArraysEqual(map(words2, word => word[0]), words2); //passed, OK