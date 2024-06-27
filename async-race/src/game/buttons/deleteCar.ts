import checkNull from '../../createStructure/utilities';
import numberOfCars from '../numberOfCars';
import { deleteCar, deleteWinner } from '../race';

export default function deleteSelectCar(event: Event) {
  const target = checkNull(event.currentTarget);
  if (target instanceof HTMLElement) {
    const id = Number(target.classList[1].replace(/[a-z]/gi, ''));
    deleteCar(id).finally(() => numberOfCars());
    deleteWinner(id);
    target.parentNode?.parentNode?.parentNode?.removeChild(
      target.parentNode.parentNode,
    );
  }
}
