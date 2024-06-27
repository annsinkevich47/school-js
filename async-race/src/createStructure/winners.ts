import Base from './baseMain';
import checkNull from './utilities';

export default class Winners extends Base {
  constructor() {
    const parametrs = {
      tag: 'div',
      classNames: 'winners',
      text: 'text',
    };
    super(parametrs);
    this.configs();
  }
  configs() {
    console.log('445353535');
    const template = `<div class="winnersWrapper"><div class="winnersName">Winners:</div><div class="numberOfWinners"></div></div><div class="namePageWrapperWinners"><h2 class="pageNameWinners">Page:</h2><div class="numberOfPageWinners"></div></div><table class="tableWrapper"></table>`;
    checkNull(this.createEl.getTag()).innerHTML = template;
  }
}
