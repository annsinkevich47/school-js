import { NewsDataType, NewsSourceType } from '../../types/types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    sources: Sources;
    news: News;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsDataType) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data : NewsSourceType) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
