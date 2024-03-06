export interface IBasePaginate {
    current_page: number;
    last_page: number;
    total: number;
    links: any;
    from: number;
    to: number;
}

export interface IPaginate<T> extends IBasePaginate {
    data?: T[];
}
