import { getWinner } from '../game/race';
import Base from './baseMain';
import checkNull from './utilities';

export default class TableWin extends Base {
  constructor() {
    const parametrs = {
      tag: 'div',
      classNames: `winner`,
      text: '',
    };
    super(parametrs);
    this.configs();
  }

  configs(): void {
    let template =
      '<tr><th>Number</th><th>Car</th><th>Name</th><th>Wins</th><th>Time, s</th></tr>';
    const cars = document.querySelectorAll('.cardWrapper');
    cars.forEach((item, index) => {
      const carImage = item.children[1].children[3].innerHTML;
      const carModel = item.children[0].children[2].innerHTML;
      let carTime: number | string = '-';
      let carWins: number | string = '0';
      getWinner(index + 1).then((value) => {
        if (value.wins !== undefined) {
          carWins = value.wins;
        }
        if (!Number.isNaN(Number(value.time))) {
          carTime = (Number(value.time) / 1000).toFixed(1).toString();
        }
        template += `<tr><th>${(index += 1)}</th><th><span class="icon-car car${index} icon-win">${carImage}</span></th><th>${carModel}</th><th>${carWins}</th><th>${carTime}</th></tr>`;
        checkNull(document.querySelector('.tableWrapper')).innerHTML = template;
      });
    });
  }
}
