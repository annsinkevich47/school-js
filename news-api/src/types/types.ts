import { NewsSource, pieceOfNews } from "./sources";

export type OptionTypes<T> = (data?: T) => void;
export type Callback<T> = (data?: T) => void;
export interface NewsDataType {
    articles: NewsSource[];
}
export interface NewsSourceType {
    sources: pieceOfNews[];
}
export enum statusResp {
    Unauthorized = 401,
    NotFound = 404
}
