import React, { useEffect, useState } from 'react';
import Datatable from '../src/table/Datatable';
import type { Meta } from '@storybook/react';
import { Button } from '../src';

const meta = {
    title: 'Components/Datatable',
    component: Datatable,
    tags: ['autodocs'],
} satisfies Meta<typeof Datatable>;

export default meta;

export function Primary() {
    const [pagePaginate, setPagePaginate] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {
        //
    }, [search]);

    const data = [
        {
            id: 1,
            full_name: 'Zeynep',
            email: 'student@imtihan.tech',
        },
    ];

    const meta = {
        current_page: 1,
        last_page: 1,
        total: 2,
        links: [
            {
                url: null,
                label: '&laquo; Previous',
                active: false,
            },
        ],
        from: 1,
        to: 2,
    };

    const columns = [
        {
            Header: 'Full Name',
            accessor: 'full_name',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
    ];
    return (
        <>
            <Datatable
                columns={columns}
                data={data}
                pagePaginate={pagePaginate}
                setPagePaginate={setPagePaginate}
                meta={meta}
                isLoading={false}
                tableTopRightHeader={
                    <Button type={'button'} label={'Primary Button'} />
                }
                setSearch={setSearch}
            />
        </>
    );
}
