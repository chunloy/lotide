//import modules
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//test case: array length <= 2
assertArraysEqual(middle([1]), []); //passed, OK
assertArraysEqual(middle([1, 2]), []); //passed, OK

//test case: odd number arrays
assertArraysEqual(middle([1, 2, 3]), [2]); //passed, OK
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); //passed, OK

//test case: even number arrays
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //passed, OK
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); //passed, OK