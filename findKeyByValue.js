const findKeyByValue = function(object, value) {
  //loop through keys
  for (const key in object) {
    if (object[key] === value) {
      return key; //return the key if a match is found
    }
  }

  return undefined;
};
module.exports = findKeyByValue;