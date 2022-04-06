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

const assertArraysEqual = function(arrayOne, arrayTwo) {
  console.log((eqArrays(arrayOne, arrayTwo) ?
    `🟢 Assertion Passed: [${arrayOne}] === [${arrayTwo}]` : `🔴 Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`));
};

const flatten = function(inputArray) {
  let singleArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (Array.isArray(inputArray[i])) {
      for (let j = 0; j < inputArray[i].length; j++) {
        singleArray.push(inputArray[i][j]);
      }
    } else {
      singleArray.push(inputArray[i]);
    }
  }
  return singleArray;
};

//test scenarios
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); //passed, OK
assertArraysEqual(flatten([1, 2, ['3', '4'], 5, []]), [1, 2, '3', '4', 5]); //passed, OK
assertArraysEqual(flatten([1, 2, ['3', '4'], 5, ['!&', '&', '@']]), [1, 2, '3', '4', 5, '!&', '&', '@']); //passed, OK
