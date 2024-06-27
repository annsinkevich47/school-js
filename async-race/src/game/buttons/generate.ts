import { constructCar } from './createCar';

export default function generateCars() {
  const carBrands = [
    'Volvo',
    'Volkswagen',
    'Toyota',
    'Ford',
    'BMW',
    'Kia',
    'Audi',
    'Nissan',
    'Honda',
    'Chevrolet',
    'Hyundai',
    'Mazda',
    'Ferrari',
    'Subaru',
    'Suzuki',
    'Tesla',
    'Fiat',
    'Bentley',
    'Citroen',
    'Maserati',
    'Lamborghini',
  ];
  function getRandoms() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const randomModel = carBrands[Math.floor(Math.random() * carBrands.length)];
    const randoms = {
      model: randomModel,
      color: randomColor,
    };
    return randoms;
  }
  for (let i = 0; i < 100; i += 1) {
    constructCar(getRandoms().model, getRandoms().color);
  }
}
