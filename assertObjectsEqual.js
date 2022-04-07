const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  console.log((eqObjects(actual, expected) ?
    `🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
};

const eqObjects = function(object1, object2) {
  const keysObject1 = Object.keys(object1);
  const keysObject2 = Object.keys(object2);

  //check if number of keys match
  if (keysObject1.length !== keysObject2.length) {
    return false;
  }

  for (let key of keysObject1) {
    //check if both values are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key])) {
        continue; //continue if array elements match
      }
    }
    //check if values match
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
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

//test cases:
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3' };
assertObjectsEqual(ab, ba); //passed, OK
assertObjectsEqual(ab, abc); //passed, OK