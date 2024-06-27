import { createNewCar } from './buttons/createCar';
import deleteSelectCar from './buttons/deleteCar';
import { moveToGarage, moveToWinners } from './buttons/navBtn';
import { getNextPage, getPrevPage } from './buttons/pagesBtn';
import selectCar from './buttons/select';
import updateSelectCar from './buttons/updateCar';
import generateCars from './buttons/generate';
import engineOn from './buttons/aBtn';
import { resetCar } from './drive/resetCar';
import startRace from './drive/raceCars';
import resetAll from './drive/resetAllCars';
import { hideModalWin } from './buttons/showModal';

export default function checkClick() {
  document.querySelector('.toGarage')?.addEventListener('click', moveToGarage);
  document
    .querySelector('.toWinners')
    ?.addEventListener('click', moveToWinners);
  document.querySelector('.create')?.addEventListener('click', createNewCar);
  document.querySelector('.update')?.addEventListener('click', updateSelectCar);
  document.querySelector('.nextPage')?.addEventListener('click', getNextPage);
  document.querySelector('.prevPage')?.addEventListener('click', getPrevPage);
  document.querySelector('.generate')?.addEventListener('click', generateCars);
  document.querySelector('.race')?.addEventListener('click', startRace);
  document.querySelector('.reset')?.addEventListener('click', resetAll);
  document
    .querySelector('.greetingCross')
    ?.addEventListener('click', hideModalWin);
  document
    .querySelectorAll('.select')
    ?.forEach((item) => item.addEventListener('click', selectCar));
  document
    .querySelectorAll('.A')
    ?.forEach((item) => item.addEventListener('click', engineOn));
  document
    .querySelectorAll('.B')
    ?.forEach((item) => item.addEventListener('click', resetCar));
  document
    .querySelectorAll('.remove')
    ?.forEach((item) => item.addEventListener('click', deleteSelectCar));
}
