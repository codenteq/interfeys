import React, { ReactNode } from 'react';
import { IBasePaginate } from './IPaginate';
import Button from '../button/Button';

interface PaginationProps {
    previousPage: () => void;
    nextPage: () => void;
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
                    Showing {meta?.from} {' - '} {meta?.to} of {meta?.total}
                </span>
                <ul className="list-none inline-flex items-stretch -space-x-px">
                    <li>
                        <Button
                            type="button"
                            size="icon"
                            variant="outline"
                            onClick={customPrevPage}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5 8.25 12l7.5-7.5"
                                />
                            </svg>
                        </Button>
                    </li>
                    <li>
                        <Button
                            type="button"
                            size="icon"
                            variant="outline"
                            onClick={customNextPage}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </Button>
                    </li>
                </ul>
            </nav>
        </>
    );
}
