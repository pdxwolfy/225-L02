const assert = require("../assert.js");

// eslint-disable-next-line max-statements
(function main() {
  "use strict";

  function makeCountry(name, continent, visited = false) {
    return {
      name:      name,
      continent: continent,
      visited:   visited,

      getDescription: function() {
        const haveVisited = this.visited ? "have" : "haven't";
        return this.name + " is located in " + continent +
               ". I " + haveVisited + " visited " + name + ".";
      },

      visitCountry: function() {
        this.visited = true;
      },
    };
  }

  const chile = makeCountry("The Republic of Chile", "South America");
  const canada = makeCountry("Canada", "North America");
  const southAfrica = makeCountry("The Republic of South Africa", "Africa");
  const newZealand = makeCountry("New Zealand", "Australia", true);

  southAfrica.visitCountry();
  chile.visitCountry();
  newZealand.visitCountry();

  assert.show(chile.getDescription());
  assert.show(canada.getDescription());
  assert.show(southAfrica.getDescription());
  assert.show(newZealand.getDescription());

  assert.divider();
  assert.show(chile);
  assert.show(canada);
  assert.show(southAfrica);
  assert.show(newZealand);
  assert.done();
}());
