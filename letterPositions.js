const letterPositions = function(sentence) {
  const results = {}; //empty obhect to store an indices of each letter

  for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] === ' ') {
      continue; //skip to next letter if there's a space
    }

    if (!results[sentence[i]]) {
      results[sentence[i]] = []; //create a new key if it doesn't already exist
    }

    results[sentence[i]].push(i);
  }
  return results;
};

//export module
module.exports = letterPositions;