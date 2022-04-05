const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};

//test scenarios
assertEqual(head([5, 6, 7]), 5); //assertion passed
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //assertion passed
assertEqual(head([10]), 10); //assertion passed
assertEqual(head([]), undefined); //assertion passed
assertEqual(head([5, 6, 7]), undefined); //assetion failed