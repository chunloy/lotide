const findKey = function(object, callback) {
  //loop through array until callback is true
  for (let property in object) {
    if (callback(object[property])) {
      return property;
    }
  }
  return undefined;
};

//export modules
module.exports = findKey;