import React, { ReactNode } from 'react';
import { IBasePaginate } from './IPaginate';

interface PaginationProps {
    previousPage: () => void;
    nextPage: () => void;
    // eslint-disable-next-line no-unused-vars
    setPagePaginate: (page: number) => void;
    pagePaginate: number;
    meta: IBasePaginate;
}

export default function Pagination({
    previousPage,
    nextPage,
    setPagePaginate,
    pagePaginate,
    meta,
}: PaginationProps): ReactNode {
    const customPrevPage = () => {
        if (!meta || pagePaginate === 1) return;
        setPagePaginate(pagePaginate - 1);
        previousPage();
    };

    const customNextPage = () => {
        if (!meta || pagePaginate === meta?.last_page) return;
        setPagePaginate(pagePaginate + 1);
        nextPage();
    };

    return (
        <>
            <nav
                className="flex justify-between items-center p-3"
                aria-label="Datatable navigation">
                <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
                    Gösteriliyor{' '}
                    <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                        {meta?.from} {' - '} {meta?.to}
                    </span>
                    {' of '}
                    <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                        {meta?.total}
                    </span>
                </span>
                <ul className="list-none inline-flex items-stretch -space-x-px">
                    <li>
                        <button
                            onClick={customPrevPage}
                            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-zinc-500 bg-white rounded-l-lg border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white">
                            <span className="sr-only">Önceki</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={customNextPage}
                            className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-zinc-500 bg-white rounded-r-lg border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white">
                            <span className="sr-only">Sonraki</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
}
