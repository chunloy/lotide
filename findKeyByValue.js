const findKeyByValue = function(object, value) {
  //loop through keys
  for (const key in object) {
    if (object[key] === value) {
      return key; //return the key if a match is found
    }
  }

  return undefined;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  crime: "Power",
  reality: "American Ninja Warrior",
  news: "CTV",
  currentEvents: "CTV"
};

//test cases:
const result = findKeyByValue(bestTVShowsByGenre, 'The Expanse'); 
assertEqual(result, 'sciFi'); //passed, OK

const result1 = findKeyByValue(bestTVShowsByGenre, 'American Ninja Warrior');
assertEqual(result1, 'reality'); //passed, OK

const result2 = findKeyByValue(bestTVShowsByGenre, 'South Park');
assertEqual(result2, undefined); //passed, OK

const result3 = findKeyByValue(bestTVShowsByGenre, 'CTV');
assertEqual(result3, 'news'); //passed, OK