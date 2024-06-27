import checkNull from '../../createStructure/utilities';

export function showModalWin() {
  checkNull(document.querySelector<HTMLElement>('.greeting')).style.display =
    'flex';
}

export function hideModalWin() {
  checkNull(document.querySelector<HTMLElement>('.greeting')).style.display =
    'none';
}
