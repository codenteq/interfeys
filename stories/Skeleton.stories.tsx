import type { Meta } from '@storybook/react';
import React from 'react';
import { Skeleton } from '../src';

const meta: Meta<typeof Skeleton> = {
    title: 'Components/Skeleton',
    component: Skeleton,
};

export default meta;

export function Primary() {
    return (
        <div className="flex items-center gap-4">
            <Skeleton
                style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '9999px',
                }}
            />
            <div className="space-y-2">
                <Skeleton
                    style={{
                        width: '16rem',
                        height: '1rem',
                    }}
                />
                <Skeleton
                    style={{
                        width: '16rem',
                        height: '1rem',
                    }}
                />
            </div>
        </div>
    );
}

export function Card() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton
                style={{
                    width: '16rem',
                    height: '8rem',
                    borderRadius: '12px',
                }}
            />
            <div className="space-y-2">
                <Skeleton
                    style={{
                        width: '16rem',
                        height: '1rem',
                    }}
                />
                <Skeleton
                    style={{
                        width: '12rem',
                        height: '1rem',
                    }}
                />
            </div>
        </div>
    );
}
