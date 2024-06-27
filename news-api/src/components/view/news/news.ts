import './news.css';
import { NewsSource, checkNull } from '../../../types/sources';

class News {
    draw(data: NewsSource[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;
        
            if (idx % 2) checkNull(newsClone.querySelector('.news__item')).classList.add('alt');

            checkNull(newsClone.querySelector<HTMLElement>('.news__meta-photo')).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            checkNull(newsClone.querySelector<HTMLElement>('.news__meta-photo')).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            checkNull(newsClone.querySelector('.news__meta-author')).textContent = item.author || item.source.name;
            checkNull(newsClone.querySelector('.news__meta-date')).textContent = item.publishedAt
            .slice(0, 10)
            .split('-')
            .reverse()
            .join('-');
            
            checkNull(newsClone.querySelector('.news__description-title')).textContent = item.title;
            checkNull(newsClone.querySelector('.news__description-source')).textContent = item.source.name;
            checkNull(newsClone.querySelector('.news__description-content')).textContent = item.description;
            checkNull(newsClone.querySelector('.news__read-more a')).setAttribute('href', item.url);
            
            fragment.append(newsClone);
        });
        checkNull(document.querySelector('.news')).innerHTML = '';
        checkNull(document.querySelector('.news')).appendChild(fragment);
    }
}

export default News;
