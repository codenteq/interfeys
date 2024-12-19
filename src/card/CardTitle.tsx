import * as React from 'react';
import clsx from 'clsx';

interface ICardTitleProps extends React.HTMLProps<HTMLHeadingElement> {
    className?: string;
    children: React.ReactNode;
}

export default function CardTitle({
    className,
    children,
    ...prop
}: ICardTitleProps) {
    return (
        <h3
            className={clsx(
                className,
                'text-2xl font-semibold leading-none tracking-tight',
            )}
            {...prop}>
            {children}
        </h3>
    );
}
