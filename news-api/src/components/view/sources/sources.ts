import {pieceOfNews, checkNull} from '../../../types/sources';
import './sources.css';

class Sources {
    draw(data: pieceOfNews[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        if (sourceItemTemp === null) {
            throw Error('Source unavailable')
        }
        data.forEach((item) => {
            const sourceClone = <HTMLElement>sourceItemTemp.content.cloneNode(true);
            if (sourceClone === null) {
                throw Error('SourceClone unavailable')
            }
            checkNull(sourceClone.querySelector('.source__item-name')).textContent = item.name;
            checkNull(sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);
            
            fragment.append(sourceClone);
        });
        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
