import TableWin from '../../createStructure/tableWinners';
import checkNull from '../../createStructure/utilities';
import Winners from '../../createStructure/winners';

export function moveToWinners() {
  checkNull(document.querySelector<HTMLElement>('.main')).style.display =
    'none';
  if (document.querySelector('.winners') === null) {
    const winners = new Winners();
    const footer = document.querySelector('.footer');
    console.log(document.querySelector('.winners'));
    document.body.insertBefore(winners.getHtmlElement(), footer);
  } else {
    checkNull(document.querySelector<HTMLElement>('.winners')).style.display =
      'block';
  }
  checkNull(document.querySelector('.tableWrapper')).innerHTML = '';
  new TableWin();
}
export function moveToGarage() {
  checkNull(document.querySelector<HTMLElement>('.winners')).style.display =
    'none';
  checkNull(document.querySelector<HTMLElement>('.main')).style.display =
    'block';
}
