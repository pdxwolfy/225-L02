const assert = require("../assert.js");

// eslint-disable-next-line max-statements
(function main() {
  "use strict";

  function makeCountry(name, continent) {
    return {
      name:      name,
      continent: continent,
      visited:   false,

      getDescription: function() {
        return this.name + " is located in " + continent + ".";
      },
    };
  }

  const chile = makeCountry("The Republic of Chile", "South America");
  const canada = makeCountry("Canada", "North America");
  const southAfrica = makeCountry("The Republic of South Africa", "Africa");

  assert.show(chile.getDescription());
  assert.show(canada.getDescription());
  assert.show(southAfrica.getDescription());

  assert.show(chile);
  assert.show(canada);
  assert.show(southAfrica);
  assert.done();
}());
