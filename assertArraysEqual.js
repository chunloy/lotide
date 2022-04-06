const assertArraysEqual = function(arrayOne, arrayTwo) {
  let lengthMatch = true;
  let elementMatch = true;

  //check if lengths match
  if (arrayOne.length !== arrayTwo.length) {
    lengthMatch = false;
  }
  //check if elements match
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      elementMatch = false;
    }
  }
  console.log((lengthMatch && elementMatch ?
    `🟢 Assertion Passed: [${arrayOne}] === [${arrayTwo}]` : `🔴 Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`));
};
//should print assertion passed
assertArraysEqual([1, 2, 3], [1, 2, 3]);

//should print assertion failed
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
