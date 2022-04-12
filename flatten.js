const flatten = function(inputArray) {
  let singleArray = []; //store items from input array here

  //loop through outer arrat
  for (let i = 0; i < inputArray.length; i++) {
    
    //if item is a nested array, loop through it
    if (Array.isArray(inputArray[i])) {
      for (let j = 0; j < inputArray[i].length; j++) {
        singleArray.push(inputArray[i][j]);
      }
    } else {
      singleArray.push(inputArray[i]);
    }
  }
  return singleArray;
};

//export module
module.exports = flatten;