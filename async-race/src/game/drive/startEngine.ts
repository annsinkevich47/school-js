import { animationFrame } from '../../createStructure/interface';
import checkNull from '../../createStructure/utilities';
import { showModalWin } from '../buttons/showModal';
import { getCar, getWinner, updateWinner } from '../race';

const anotherAnimFrame: Array<number> = [];
let firstCar = false;

export function moveCar(id: number, time: number, car: HTMLElement) {
  function animate({ timing, draw, duration, id }: animationFrame) {
    anotherAnimFrame.push(id);
    const start = performance.now();
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
      const progress = timing(timeFraction);
      draw(progress);
      if (timeFraction < 1) {
        anotherAnimFrame[id] = requestAnimationFrame(animate);
      } else if (!firstCar) {
        firstCar = true;
        getCar(id).then((value) => {
          showModalWin();
          checkNull(document.querySelector('.greetingText')).innerHTML =
            `Car ${value.name} win!`;
          getWinner(value.id).then((item) => {
            if (Object.prototype.hasOwnProperty.call(item, 'wins')) {
              const currentWins = Number(item.wins);
              updateWinner(value.id, { wins: (currentWins + 1).toString() });
            } else {
              updateWinner(value.id, { wins: '1' });
            }
          });
        });
      }
    });
  }
  animate({
    timing: (timeFraction: number) => {
      return timeFraction;
    },
    draw(progress: number) {
      checkNull(car).style.left = progress * 87 + 'vw';
    },
    duration: time,
    id: id,
  });
}

export function stopCar(idNumber: number) {
  cancelAnimationFrame(anotherAnimFrame[idNumber]);
}
export function resetFirst() {
  firstCar = false;
}
