//import module
const assertArraysEqual = require('../assertArraysEqual');

//should print assertion passed
assertArraysEqual([1, 2, 3], [1, 2, 3]); //passed, OK

//should print assertion failed
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); //passed, OK

//should print assertion passed
assertArraysEqual([],[]); //passed, OK