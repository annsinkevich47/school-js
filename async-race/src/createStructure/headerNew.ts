import checkNull from './utilities';
import Base from './baseMain';

export default class Header extends Base {
  constructor() {
    const params = {
      tag: 'header',
      classNames: 'header',
      text: 'text',
    };
    super(params);
    this.configs();
  }
  configs() {
    const template = `<nav class='navigate'><button class='toGarage'>To Garage</button><button class='toWinners'>To Winners</button></nav><div class="colorPalette"><input type="text" class="textCreate"><input type="color" class="colorCreate"><button class='create'>Create</button><input type="text" class="textUpdate" value=""><input type="color" class="colorUpdate" value=""><button class='update'>Update</button></div><div class='buttonsWrapper'><button class='race'>Race</button><button class='reset'>Reset</button><button class='generate'>Generate</button></div>`;
    checkNull(this.createEl.getTag()).innerHTML = template;
  }
}
