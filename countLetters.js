const countLetters = function(string) {
  const result = {}; //empty array to store letter count

  for (const letter of string) {

    if (letter === ' ') {
      continue;
    }

    if (!result[letter]) {
      result[letter] = 0; //if letter doesn't exist, include it
    }
    result[letter]++;

  }
  return result;
};

//export module
module.exports = countLetters;