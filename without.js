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

const without = function(source, itemsToRemove) {
  let filteredArray = []; //empty array to store values after filtering

  //loop through source array and find remove elements
  for (let element of source) {
    if (!itemsToRemove.find(item => item === element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

without([1, 2, 3], [1]); // => [2, 3]
["1", "2", "3"], [1, 2, "3"]; // => ["1", "2"]

//test scenarios
assertArraysEqual(without([1, 'a', 2, 'b', 3, 'c'], ['a', 'b', 'c', 'd', 'e']), [1, 2, 3]); //passed, OK
assertArraysEqual(without(["1", "2", "3", "88"], [1, 2, "3", "4", 6, 4, 3, 88]), ["1", "2"]); //failed, OK
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3", "4", 6, 4, 3]), ["1", "2"]); //passed, OK

//test case: verify that array is unchanged
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);