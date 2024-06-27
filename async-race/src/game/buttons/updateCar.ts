import checkNull from '../../createStructure/utilities';
import { updateCar } from '../race';
import { selectedCar } from './select';

export default function updateSelectCar() {
  const source = selectedCar.target;
  const icon = checkNull(
    source.parentElement?.parentElement?.children[1].children[3].children[0],
  );
  const id = Number(icon.classList[1].replace(/[a-z]/gi, ''));
  const name = checkNull(
    document.querySelector<HTMLInputElement>('.textUpdate'),
  )?.value;
  const color = checkNull(
    document.querySelector<HTMLInputElement>('.colorUpdate'),
  )?.value;
  checkNull(source.nextElementSibling?.nextElementSibling).innerHTML = name;
  (icon as HTMLElement).style.setProperty('--color', color);
  updateCar(id, { name, color });
}
