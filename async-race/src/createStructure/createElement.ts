import checkNull from './utilities';

export default class Creator {
  element: null | HTMLElement;

  constructor(param: { tag: string; classNames: string; textContent: string }) {
    this.element = null;
    this.createElement(param);
  }

  createElement(param: {
    tag: string;
    classNames: string;
    textContent: string;
  }) {
    this.element = document.createElement(param.tag);
    this.addClass(param.classNames);
    this.addText(param.textContent);
  }
  addClass(classItem: string) {
    this.element?.classList.add(classItem);
  }
  addText(text: string) {
    checkNull(this.element).textContent = text;
  }
  getTag() {
    return this.element;
  }
}
