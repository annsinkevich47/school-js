import Card from '../../createStructure/carItems';
import checkNull from '../../createStructure/utilities';
import { getCars } from '../race';

let pageNumber = 1;

export function getNextPage() {
  pageNumber += 1;
  const stringPage = pageNumber.toString();
  getCars([
    { key: '_page', value: stringPage },
    { key: '_limit', value: '7' },
  ]).then((value) => {
    const leng = value.getData.length;
    if (leng === 0) {
      pageNumber -= 1;
      return;
    } else {
      checkNull(document.querySelector('.carsWrapper')).innerHTML = '';
      for (let i = 1; i <= leng; i += 1) {
        new Card(value.getData[i - 1].id);
      }
    }
    checkNull(document.querySelector('.numberOfPage')).innerHTML = stringPage;
  });
}
export function getPrevPage() {
  pageNumber -= 1;
  const stringPage = pageNumber.toString();
  getCars([
    { key: '_page', value: stringPage },
    { key: '_limit', value: '7' },
  ]).then((value) => {
    const leng = value.getData.length;
    if (leng === 0) {
      pageNumber += 1;
      return;
    } else {
      checkNull(document.querySelector('.carsWrapper')).innerHTML = '';
      for (let i = 1; i <= leng; i += 1) {
        new Card(value.getData[i - 1].id);
      }
    }
    checkNull(document.querySelector('.numberOfPage')).innerHTML = stringPage;
  });
}
