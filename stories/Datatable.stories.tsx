import React, { useEffect, useState } from 'react';
import type { Meta } from '@storybook/react';
import { Button, Datatable } from '../src';

const meta: Meta<typeof Datatable> = {
    title: 'Components/Datatable',
    component: Datatable,
    tags: ['autodocs'],
};

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
        total: data.length,
        links: [
            {
                url: null,
                label: '&laquo; Previous',
                active: false,
            },
        ],
        from: 1,
        to: data.length,
    };

    const columns = [
        {
            accessorKey: 'id',
            header: 'Id',
            footer: 'id',
        },
        {
            accessorKey: 'full_name',
            header: 'Name',
            footer: 'id',
        },
        {
            accessorKey: 'email',
            header: 'Is Everyone',
            footer: 'id',
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
                tableTopRightHeader={<Button>Button</Button>}
                setSearch={setSearch}
            />
        </>
    );
}
