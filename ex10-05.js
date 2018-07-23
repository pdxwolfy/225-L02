const assert = require("../assert.js");

// eslint-disable-next-line max-statements
(function main() {
  "use strict";

  function createProduct(id, name, stock, price) {
    return {
      id:    id,
      name:  name,
      stock: stock,
      price: price,

      setPrice: function(newPrice) {
        if (price <= 0) {
          assert.log("Invalid price: " + newPrice.toString());
        } else {
          this.price = newPrice;
        }
      },

      describe: function() {
        assert.log("Name: " + this.name);
        assert.log("ID: " + this.id.toString());
        assert.log("Price: $" + this.price.toString());
        assert.log("Stock: " + this.stock.toString());
      },
    };
  }

  /* eslint-disable no-magic-numbers */
  const scissors = createProduct(0, "Scissors", 8, 10);
  const drill = createProduct(1, "Cordless Drill", 15, 45);

  assert.show(scissors);
  assert.show(drill);

  scissors.setPrice(-2.3);
  drill.setPrice(43);

  scissors.describe();
  drill.describe();

  assert.done();
}());
