import Base from './baseMain';
import checkNull from './utilities';
import trackImg from '../img/track.png';
import { getCar } from '../game/race';
import { CarName } from './interface';
import checkClick from '../game/listeners';
import numberOfCars from '../game/numberOfCars';

export default class Card extends Base {
  carConfig!: CarName;
  count: number;
  constructor(count: number) {
    const parametrs = {
      tag: 'div',
      classNames: `card${count}`,
      text: '',
    };
    super(parametrs);
    this.count = count;
    getCar(count)
      .then((value) => {
        this.carConfig = value;
        // console.log(this.carConfig)
        this.configs();
        // this.addMove();
      })
      .finally(() => {
        checkClick();
        numberOfCars();
      });
  }
  configs() {
    const template = `<div class="cardWrapper"><div class="controlsWrapper"><button class="select">Select</button><button class="remove remove${this.count}">Remove</button><span class="model">${this.carConfig.name}</span></div><div class="trackWithCar"><button class="A A${this.count}">A</button><button class="B B${this.count}">B</button><img class="trackImage" src="${trackImg}" alt="track"><span class="icon-car car${this.count}"><span class="path1 pathCount${this.count}"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span></span></div>`;
    // checkNull(document.querySelector('.carsWrapper')).innerHTML = template;
    checkNull(document.querySelector('.carsWrapper')).insertAdjacentHTML(
      'beforeend',
      template,
    );
    document
      .querySelector<HTMLElement>(`.pathCount${this.count}`)
      ?.style.setProperty('--color', `${this.carConfig.color}`);
  }
}
