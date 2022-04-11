const middle = function(array) {
  let middleArray = [];
  if (array.length <= 2) {
    return middleArray;
  } else if (array.length % 2 === 0) {
    middleArray.push(Math.ceil(array.length / 2), Math.ceil(array.length / 2) + 1);
  } else {
    middleArray.push(Math.ceil(array.length / 2));
  }
  return middleArray;
};

//export module
module.exports = middle;