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

//TEST FUNCTION
const assertArraysEqual = function(arrayOne, arrayTwo) {
  console.log((eqArrays(arrayOne, arrayTwo) ?
    `🟢 Assertion Passed: [${arrayOne}] === [${arrayTwo}]` : `🔴 Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`));
};

//ACTUAL CODE
const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 === 0) {
    middleArray.push(Math.ceil(array.length / 2), Math.ceil(array.length / 2) + 1);
  } else {
    middleArray.push(Math.ceil(array.length / 2));
  }
  return middleArray;
};

//test case: array length <= 2
assertArraysEqual(middle([1]), []); //passed, OK
assertArraysEqual(middle([1, 2]), []); //passed, OK

//test case: odd number arrays
assertArraysEqual(middle([1, 2, 3]), [2]); //passed, OK
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); //passed, OK

//test case: even number arrays
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //passed, OK
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); //passed, OK