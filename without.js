const without = function(source, itemsToRemove) {
  let filteredArray = []; //empty array to store values after filtering

  //loop through source array and find remove elements
  for (let element of source) {
    if (!itemsToRemove.find(item => item === element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};
//export module
module.exports = without;