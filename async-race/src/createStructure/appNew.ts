import { getCars } from '../game/race';
import Card from './carItems';
import Footer from './footer';
import Header from './headerNew';
import Main from './main';
import Message from './winMessage';
// import Winners from "./winners";

export default class App {
  constructor() {
    this.createElem();
  }
  createElem() {
    const footer = new Footer();
    const main = new Main();
    const header = new Header();
    const message = new Message();

    document.body.append(
      message.getHtmlElement(),
      header.getHtmlElement(),
      main.getHtmlElement(),
      footer.getHtmlElement(),
    );
    getCars([
      { key: '_page', value: '1' },
      { key: '_limit', value: '7' },
    ]).then((value) => {
      const leng = value.getData.length;
      for (let i = 1; i <= leng; i += 1) {
        new Card(value.getData[i - 1].id);
      }
    });
  }
}
