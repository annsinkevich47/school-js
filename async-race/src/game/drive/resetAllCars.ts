import { hideModalWin } from '../buttons/showModal';
import { resetCar } from './resetCar';
import { resetFirst, stopCar } from './startEngine';

export default function resetAll() {
  stopCar;
  resetFirst();
  hideModalWin();
  const cars = document.querySelectorAll('.B');
  cars.forEach((item) => resetCar(item as HTMLElement));
}
