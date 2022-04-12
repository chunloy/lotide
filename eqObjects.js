//import modules
const eqArrays = require('./eqArrays');

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

//export modules
module.exports = eqObjects;