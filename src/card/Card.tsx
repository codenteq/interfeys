import * as React from 'react';
import clsx from 'clsx';

interface ICardProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export default function Card({ className, children, ...prop }: ICardProps) {
    return (
        <div
            className={clsx(
                className,
                'rounded-lg border border-[#e4e4e7] dark:border-[#27272a] bg-white text-[#18181b] dark:bg-black dark:text-white shadow-sm',
            )}
            {...prop}>
            {children}
        </div>
    );
}
