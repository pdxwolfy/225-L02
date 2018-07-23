const assert = require("../assert.js");

// eslint-disable-next-line max-statements
(function main() {
  "use strict";

  const scissors = {
    id:    0,
    name:  "Scissors",
    stock: 8,
    price: 10,
  };

  const drill = {
    id:    1,
    name:  "Cordless Drill",
    stock: 15,
    price: 45,
  };

  function setPrice(obj, price) {
    if (price <= 0) {
      assert.log("Invalid price: " + price.toString());
    } else {
      obj.price = price;
    }
  }

  /* eslint-disable no-magic-numbers */
  assert.show(scissors);
  assert.show(drill);

  setPrice(scissors, -2.3);
  setPrice(drill, 43);

  assert.show(scissors);
  assert.show(drill);

  assert.done();
}());
