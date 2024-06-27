import { catUpdate } from '../../createStructure/interface';
import checkNull from '../../createStructure/utilities';

export let selectedCar: catUpdate;

export default function selectCar(event: Event) {
  const target = checkNull(event.currentTarget);
  if (target instanceof HTMLElement) {
    const car = target.parentNode?.parentNode;
    const model = checkNull(car).children[0].children[2].innerHTML;
    const color = checkNull(
      car?.children[1].children[3].children[0].getAttribute('style'),
    );
    selectedCar = {
      model: model,
      color: color.split(' ')[1],
      target: target,
    };
    checkNull(document.querySelector<HTMLInputElement>('.textUpdate')).value =
      model;
  }
}
