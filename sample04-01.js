function makeVehicle(fuel, mpg) {
  return {
    fuel: fuel,
    mpg: mpg,
    range: function () {
      return this.fuel * this.mpg;
    },
  };
}

var smallCar = makeVehicle(7.8, 37);
var largeCar = makeVehicle(9.4, 29);
var truck    = makeVehicle(14.3, 23);

console.log(smallCar);
console.log(largeCar);
console.log(truck);
console.log(smallCar.range());
console.log(largeCar.range());
console.log(truck.range());
