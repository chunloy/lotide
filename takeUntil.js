const takeUntil = function(array, callback) {
  const results = []; //empty array to be filled in loop

  //loop through array and break when true
  for (let element of array) {
    if (callback(element)) {
      break;
    }
    results.push(element);
  }

  return results;
};

//export module
module.exports = takeUntil;