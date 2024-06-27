interface oneSource {
    id: string | null;
    name: string;
}

export interface NewsSource {
    source: oneSource,
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string,
}

export interface ApiNews {
    status: 'ok' | 'error';
    endResult: number,
    oneNews: NewsSource[];
}
export function checkNull<T>(value: T): NonNullable<T> {
    if (value === undefined || value === null) {
        throw new Error(`wrong value ${value}`);
    }
    return value;
}

export interface pieceOfNews {
    articles: string;
    id: string,
    name: string,
    description: string,
    url: string,
    category: string,
    language: string,
    country: string
}