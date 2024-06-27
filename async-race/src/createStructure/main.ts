import checkNull from './utilities';
import Base from './baseMain';

export default class Main extends Base {
  constructor() {
    const parametrs = {
      tag: 'main',
      classNames: 'main',
      text: 'text',
    };
    super(parametrs);
    this.configs();
  }
  configs() {
    const template = `<div class="nameWrapper"><h1 class="garageName">Garage:</h1><div class="numberOfCars"></div></div><div class="namePageWrapper"><h2 class="pageName">Page:</h2><div class="numberOfPage">1</div></div><div class="carsWrapper"></div>`;
    checkNull(this.createEl.getTag()).innerHTML = template;
  }
}
