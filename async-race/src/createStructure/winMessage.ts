import checkNull from './utilities';
import Base from './baseMain';

export default class Message extends Base {
  constructor() {
    const params = {
      tag: 'div',
      classNames: 'greeting',
      text: 'text',
    };
    super(params);
    this.configs();
  }
  configs() {
    const template = `<div class="greetingText">Car X Win!</div><div class="greetingCross"><div class="firstStick"></div><div class="secondStick"></div></div>`;
    checkNull(this.createEl.getTag()).innerHTML = template;
  }
}
