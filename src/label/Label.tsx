'use client';

import React from 'react';

interface ILabelProps extends React.HTMLProps<HTMLLabelElement> {
    className?: string;
    children: React.ReactNode;
}

export default function Label({ className, children, ...props }: ILabelProps) {
    return (
        <label
            className={`${className} block font-medium text-sm text-zinc-700 dark:text-zinc-400`}
            {...props}>
            {children}
        </label>
    );
}
