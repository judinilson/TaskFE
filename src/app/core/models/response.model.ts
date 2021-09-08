export interface IResponse {
    messages: string[],
    didError: boolean,
    errors: string[],
    code: number
}

export interface ISingleResponse<T> {
    model: T | null
}

export interface IListResponse<T> extends IResponse {
    model: T[]
}

export interface IPagedResponse<T> extends IListResponse<T> {
    itemsCount: number,
    pageCount: number
}

export class Response implements IResponse {
    code: number = 0;
    messages: string[] = [];
    didError: boolean = false;
    errors: string[] = [];
}

export class SingleResponse<T> implements ISingleResponse<T>{
    messages: string[] = [];
    didError: boolean = false;
    errors: string[] = [];
    model: T | null = null;
    code: number = 0;
}

export class ListResponse<T> implements IListResponse<T>{
    code: number = 0;
    messages: string[] = [];
    didError: boolean = false;
    errors: string[] = [];
    model: T[] = [];
}

export class PagedResponse<T> implements IPagedResponse<T>{
    code: number = 0;
    messages: string[] = [];
    didError: boolean = false;
    errors: string[] = [];
    model: T[] = [];
    pageSize: number = 10;
    pageNumber: number = 1;
    itemsCount: number = 0;
    pageCount: number = 0;
}
