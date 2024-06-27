import AppLoader from '../controller/appLoader';
import { NewsDataType, NewsSourceType, Callback } from '../../types/types';


class AppController extends AppLoader {
    getSources(callback: Callback<NewsSourceType>) {
        super.getResp(
            {
                endpoint: 'sources',
                options: {}
            },
            callback
        );
    }

    getNews(e: Event, callback: Callback<NewsDataType>) {
        let target: EventTarget | null = e.target;
        const newsContainer: EventTarget | null = e.currentTarget;

        while (target !== newsContainer) {
            if ((<Element>target)!.classList.contains('source__item')) {
                const sourceId = (<Element>target!).getAttribute('data-source-id');
                if ((<Element>newsContainer)!.getAttribute('data-source') !== sourceId) {
                    (<Element>newsContainer)!.setAttribute('data-source', sourceId as string);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId as string,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = (<Element>target)!.parentNode;
        }
    }
}

export default AppController;
