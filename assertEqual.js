const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

//Testing other scenarios
assertEqual("Lighthouse Labs", "Lighthouse Labs"); //Assertion passed
assertEqual("LighthousE Labs", "Lighthouse Labs"); //Assertion failed
assertEqual(2, 2); //Assertion passed
assertEqual(2, 2.0); //Assertion passed
assertEqual(2, 3); //Assertion failed
