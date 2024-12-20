import React, { ChangeEvent, Fragment, ReactNode } from 'react';
import Input from '../input/Input';
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    ColumnDef,
    flexRender,
} from '@tanstack/react-table';
import { IBasePaginate } from './IPaginate';
import { Pagination } from '../index';

interface DataRow {
    [key: string]: any;
}

interface IDatatableProps {
    data: DataRow[];
    columns: ColumnDef<DataRow, any>[];
    renderSubComponent?: (props: { row: DataRow }) => React.ReactElement;
    pagePaginate: number;
    setPagePaginate: (page: number) => void;
    meta: IBasePaginate;
    isLoading: boolean;
    tableTopRightHeader?: ReactNode;
    setSearch: (search: string) => void;
}

export default function Datatable({
    data,
    columns,
    renderSubComponent,
    pagePaginate,
    setPagePaginate,
    meta,
    isLoading,
    setSearch,
    tableTopRightHeader,
}: IDatatableProps): ReactNode {
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        manualPagination: true,
        pageCount: meta.total,
    });

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 2) {
            setSearch(e.target.value);
        } else {
            setSearch('');
        }
    };

    return (
        <>
            <div className="bg-white dark:bg-black overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center">
                            <div className="w-full">
                                <Input
                                    type="search"
                                    className="w-full"
                                    placeholder="Search"
                                    onChange={handleSearch}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        {tableTopRightHeader}
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left table-auto">
                        <thead className="text-xs text-zinc-700 uppercase bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-500">
                            {table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map(header => {
                                        return (
                                            <th
                                                className="px-4 py-3"
                                                key={header.id}
                                                colSpan={header.colSpan}>
                                                {header.isPlaceholder ? null : (
                                                    <div>
                                                        {flexRender(
                                                            header.column
                                                                .columnDef
                                                                .header,
                                                            header.getContext(),
                                                        )}
                                                    </div>
                                                )}
                                            </th>
                                        );
                                    })}
                                </tr>
                            ))}
                        </thead>

                        <tbody className="text-zinc-900 dark:text-zinc-300">
                            {isLoading ? (
                                <tr>
                                    {Array(columns.length)
                                        .fill(1)
                                        .map((_, key) => (
                                            <td key={key}>
                                                <div
                                                    role="status"
                                                    className="w-full p-4 rounded animate-pulse">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <div className="h-2.5 bg-zinc-300 rounded-full dark:bg-zinc-600 w-24 mb-2.5" />
                                                            <div className="w-32 h-2 bg-zinc-200 rounded-full dark:bg-zinc-700" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        ))}
                                </tr>
                            ) : table.getRowModel().rows.length > 0 ? (
                                table.getRowModel().rows.map((row: any) => {
                                    return (
                                        <Fragment key={row.id}>
                                            <tr className="border-b border-zinc-50 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 h-16">
                                                {row
                                                    .getVisibleCells()
                                                    .map((cell: any) => {
                                                        return (
                                                            <td
                                                                key={cell.id}
                                                                className="p-4 text-base font-medium whitespace-nowrap dark:text-zinc-400">
                                                                {flexRender(
                                                                    cell.column
                                                                        .columnDef
                                                                        .cell,
                                                                    cell.getContext(),
                                                                )}
                                                            </td>
                                                        );
                                                    })}
                                            </tr>
                                            {row.getIsExpanded() &&
                                                renderSubComponent && (
                                                    <tr className="border-b border-zinc-50 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 h-16">
                                                        <td
                                                            className="p-4 text-base font-medium whitespace-nowrap dark:text-zinc-400"
                                                            colSpan={
                                                                row.getVisibleCells()
                                                                    .length
                                                            }>
                                                            {renderSubComponent(
                                                                {
                                                                    row,
                                                                },
                                                            )}
                                                        </td>
                                                    </tr>
                                                )}
                                        </Fragment>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td className="text-sm p-4 truncate">
                                        Gösterilecek kayıt yok
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <Pagination
                    meta={meta}
                    previousPage={table.previousPage}
                    nextPage={table.nextPage}
                    pagePaginate={pagePaginate}
                    setPagePaginate={setPagePaginate}
                />
            </div>
        </>
    );
}
