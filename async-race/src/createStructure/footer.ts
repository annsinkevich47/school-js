import checkNull from './utilities';
import Base from './baseMain';

export default class Footer extends Base {
  constructor() {
    const parametrs = {
      tag: 'footer',
      classNames: 'footer',
      text: 'text',
    };
    super(parametrs);
    this.configs();
  }
  configs() {
    const template = `<div class="pageBtn"><button class="prevPage">Prev</button><button class="nextPage">Next</button></div>`;
    checkNull(this.createEl.getTag()).innerHTML = template;
  }
}
