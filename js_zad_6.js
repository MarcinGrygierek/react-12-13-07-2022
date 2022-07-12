const cars = [
  {
    name: 'Toyota',
    isBroken: false,
  },
  {
    name: 'Fiat',
    isBroken: true,
  },
  {
    name: 'Mercedes',
    isBroken: false,
  },
  {
    name: 'Porsche',
    isBroken: true,
  },
];

// const brokenCars = cars.filter((car) => {
//   return car.isBroken === true; // return car.isBroken;
// });

// const carsInfo = brokenCars.map(
//   (brokenCar) => `Samochód ${brokenCar.name} jest zepsuty`
// );

// console.log(brokenCars);
// console.log(carsInfo);

const brokenCars = cars
  .filter((car) => {
    return car.isBroken;
  })
  .map((brokenCar) => `Samochód ${brokenCar.name} jest zepsuty`);

console.log(brokenCars);
