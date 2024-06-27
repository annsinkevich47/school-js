import engineOn from '../buttons/aBtn';
import { hideModalWin } from '../buttons/showModal';
import { resetFirst } from './startEngine';

export default async function startRace() {
  resetFirst();
  hideModalWin();
  const cars = document.querySelectorAll('.A');
  cars.forEach((item) => engineOn(item as HTMLElement));
}
