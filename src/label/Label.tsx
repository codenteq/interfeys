import React from 'react';
import clsx from 'clsx';

interface ILabelProps extends React.HTMLProps<HTMLLabelElement> {
    className?: string;
    children: React.ReactNode;
}

export default function Label({ className, children, ...props }: ILabelProps) {
    return (
        <label
            className={clsx(
                className,
                'text-sm font-medium leading-none text-[#1c1c1c] dark:text-[#f2f7ff] peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            )}
            {...props}>
            {children}
        </label>
    );
}
