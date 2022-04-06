const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !=== ${expected}`);
  }
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
}

//test case: arrays identical
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //assertion passed
assertEqual(eqArrays([1, 'hi', 'hello'], [1, 'hi', 'hello']), true); //assertion passed
assertEqual(eqArrays([1, [1, 2, 3]], [1, [1, 2, 3]]), true); //assertion failed, ok for now
assertEqual(eqArrays([[1, 2], { day: 5, month: 'April' }], [[1, 2], { day: 5, month: 'April' }]), true); //assertion failed, ok for now

//test case: elements don't match
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); //assertion passed
assertEqual(eqArrays([1, 'hi', 'bye'], [1, 'bye', 'hi']), false); //assertion passed

//test case: lengths don't match
assertEqual(eqArrays([1, 2, 3], [4, 3, 2, 1]), false); //assertion passed

//test case: one array empty
assertEqual(eqArrays([], [1, 2, 3]), false); //assertion passed

//test case: two empty arrays
assertEqual(eqArrays([], []), true); //assertion passed

