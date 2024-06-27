import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
        controller: AppController;
        view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const item: Element | null = document.querySelector('.sources');
        if (item === null) {throw Error('Element is null')};
        item!.addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data): void => {if (data === undefined) {
                throw Error('data is undefined');
            } else {
                this.view.drawNews(data);
            }}));
        this.controller.getSources((data): void => {if (data === undefined) {
            throw Error('data is undefined');
        } else {
            this.view.drawSources(data)
        }});
    }
}

export default App;
