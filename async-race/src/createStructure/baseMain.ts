import checkNull from './utilities';
import Creator from './createElement';

export default abstract class Base {
  createEl: Creator;
  constructor(paramet: { tag: string; classNames: string; text: string }) {
    this.createEl = this.createFooter(paramet);
  }

  getHtmlElement() {
    return checkNull(this.createEl.getTag());
  }

  createFooter(param: { tag: string; classNames: string; text: string }) {
    const parametrs = {
      tag: param.tag,
      classNames: param.classNames,
      textContent: param.text,
    };
    const create = new Creator(parametrs);

    return create;
  }
  abstract configs(): void;
}
