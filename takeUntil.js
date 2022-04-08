//ACTUAL FUNCTION
const takeUntil = function(array, callback) {
  const results = []; //empty array to be filled in loop

  //loop through array and break when true
  for (let element of array) {
    if (callback(element)) {
      break;
    }
    results.push(element);
  }

  return results;
};

//TEST FUNCTION
const assertArraysEqual = function(arrayOne, arrayTwo) {
  console.log((eqArrays(arrayOne, arrayTwo) ?
    `🟢 Assertion Passed: [${arrayOne}] === [${arrayTwo}]` : `🔴 Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`));
};

//TEST FUNCTION
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

//test case: return [1, 2, 5, 7, 2]
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

//test case: return ["I've", "been", "to", "Hollywood"]
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);

//test case: return empty array
const data3 = [12, 24, 56, 78, 29, -17, 25, 43, 51];
assertArraysEqual(takeUntil(data3, x => x > 0), []);