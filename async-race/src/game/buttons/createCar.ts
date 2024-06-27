import Card from '../../createStructure/carItems';
import checkNull from '../../createStructure/utilities';
import numberOfCars from '../numberOfCars';
import { createCar, getAllCars } from '../race';

export function createNewCar() {
  const name = checkNull(
    document.querySelector<HTMLInputElement>('.textCreate'),
  )?.value;
  const color = checkNull(
    document.querySelector<HTMLInputElement>('.colorCreate'),
  )?.value;
  constructCar(name, color);
}
export function constructCar(name: string, color: string) {
  console.log(color);
  getAllCars().then((value) => {
    const number = value.length;
    const item = value[number - 1];
    const id = (item.id += 1);

    createCar({ name, color, id }).finally(() => {
      if (
        checkNull(document.querySelector('.carsWrapper')).childElementCount < 7
      ) {
        new Card(id);
      }
      numberOfCars();
    });
  });
}
