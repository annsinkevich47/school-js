import checkNull from '../../createStructure/utilities';
import { moveCar } from '../drive/startEngine';
import {
  createWinner,
  getWinner,
  getWinners,
  startCarEngine,
  updateWinner,
} from '../race';

// export const result: Array<{id: number, time: number | string}> = [];

export default async function engineOn(event: Event | HTMLElement) {
  let target: HTMLElement | EventTarget;
  if (event instanceof Event) {
    target = checkNull(event.target);
  } else {
    target = event;
  }
  if (target instanceof HTMLElement) {
    getWinners([
      { key: '_page', value: '1' },
      { key: '_limit', value: '7' },
      { key: '_sort', value: 'id' },
    ]);
    const id = Number(target.classList[1].replace(/[a-z]/gi, ''));
    const checkStart = await startCarEngine([
      { key: 'id', value: id.toString() },
      { key: 'status', value: 'started' },
    ]);
    const time = (checkStart.distance /= checkStart.velocity);
    const wins = 0;
    const car = checkNull(document.querySelector<HTMLElement>(`.car${id}`));
    await getWinner(id).then((value) => {
      if (Object.keys(value).length === 0) {
        createWinner({ id, wins, time });
      } else {
        updateWinner(id, { time: time.toString() });
      }
    });
    moveCar(id, time, car);
    await startCarEngine([
      { key: 'id', value: id.toString() },
      { key: 'status', value: 'drive' },
    ]).then(() => {});
  }
}
