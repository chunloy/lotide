const findKey = function(object, callback) {
  //loop through array until callback is true
  for (let property in object) {
    if (callback(object[property])) {
      return property;
    }
  }
  return undefined;
};

//TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const starsList = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

const fastFood = {
  "McDonalds": { stars: 1 },
  "Burger King": { stars: 2 },
  "Wendy's": { stars: 2 },
  "A&W": { stars: 2 },
  "Subway": { stars: 2 },
  "Pita Pit": { stars: 5 }
};
//test cases:
assertEqual(findKey(starsList, x => x.stars === 2), 'noma'); //passed, OK 
assertEqual(findKey(starsList, x => x.stars > 0), 'Blue Hill'); //passed, OK
assertEqual(findKey(fastFood, x => x.stars < 5), 'McDonalds'); //passed, OK
assertEqual(findKey(fastFood, x => x.stars > 5), undefined); //passed, OK

