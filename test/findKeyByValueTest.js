//import modules
const { findKeyByValue } = require('../index');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {
  it("#should return 'sciFi' when passed 'The Expanse'", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      crime: "Power",
      reality: "American Ninja Warrior",
      news: "CTV",
      currentEvents: "CTV"
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
  });

  it("#should return 'reality' when passed 'American Ninja Warrior'", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      crime: "Power",
      reality: "American Ninja Warrior",
      news: "CTV",
      currentEvents: "CTV"
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "American Ninja Warrior"), "reality");
  });

  it("#should return 'news' when passed 'CTV'", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      crime: "Power",
      reality: "American Ninja Warrior",
      news: "CTV",
      currentEvents: "CTV"
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "CTV"), "news");
  });

  it("#should return undefined when passed 'South Park'", () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      crime: "Power",
      reality: "American Ninja Warrior",
      news: "CTV",
      currentEvents: "CTV"
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "South Park"), undefined);
  });
});