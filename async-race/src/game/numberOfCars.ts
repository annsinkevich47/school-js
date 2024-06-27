import checkNull from '../createStructure/utilities';
import { getAllCars } from './race';

export default function numberOfCars() {
  getAllCars().then((value) => {
    console.log(value);
    checkNull(document.querySelector('.numberOfCars')).innerHTML = value.length;
  });
}
