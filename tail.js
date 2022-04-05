const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

//test fails, can't compare arrays like this
const result = tail(["Hello", "Lighthouse", "Labs"]); //return ["Lighthouse", "Labs"]
assertEqual(result, ["Lighthouse", "Labs"]);

//test each element individually
assertEqual(result[0], "Lighthouse"); //assertion passed
assertEqual(result[1], "Labs"); //assertion passed

//test case: check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);  //no need to capture the return value since we aren't checking it
assertEqual(words.length, 3); //assertion passed, should still have 3 elements

//test case: array with one element should return an empty array
const array = [1];
const newArray = tail(array);
console.log(newArray); //empty array

//test case: empty array should return an empty array
const emptyArray = [];
const newEmptyArray = tail(emptyArray);
console.log(newEmptyArray); //empty array

