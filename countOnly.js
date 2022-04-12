const countOnly = function(allItems, itemsToCount) {
  const results = {}; //empty object to store count by name

  for (const item of allItems) {
    //check if key in object is truthy
    if (!itemsToCount[item]) {
      continue;
    }

    if (!results[item]) {
      results[item] = 0; //if the key doesn't exist, include it in the object
    }

    results[item]++; //if the key exists in the object, count up
  }
  return results;
};

//export module
module.exports = countOnly;