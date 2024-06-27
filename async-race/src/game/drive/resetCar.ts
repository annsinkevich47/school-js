import checkNull from '../../createStructure/utilities';
import { stopCar } from './startEngine';

export function resetCar(event: Event | HTMLElement) {
  let target: EventTarget | HTMLElement;
  if (event instanceof Event) {
    target = checkNull(event.target);
  } else {
    target = event;
  }
  if (target instanceof HTMLElement) {
    const id = Number(target.classList[1].replace(/[a-z]/gi, ''));
    stopCar(id);
    const car = checkNull(document.querySelector<HTMLElement>(`.car${id}`));
    checkNull(car).style.left = '5vw';
  }
}
