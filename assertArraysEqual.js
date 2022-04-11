//import module
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  console.log((eqArrays(arrayOne, arrayTwo) ?
    `🟢 Assertion Passed: [${arrayOne}] === [${arrayTwo}]` : `🔴 Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`));
};

// const eqArrays = function(arrayOne, arrayTwo) {
//   //check if lengths match
//   if (arrayOne.length !== arrayTwo.length) {
//     return false;
//   }
//   //check if elements match
//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// //should print assertion passed
// assertArraysEqual([1, 2, 3], [1, 2, 3]);

// //should print assertion failed
// assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);

//export module
module.exports = assertArraysEqual;