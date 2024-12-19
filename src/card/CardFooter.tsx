import * as React from 'react';
import clsx from 'clsx';

interface ICardFooterProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export default function CardFooter({
    className,
    children,
    ...prop
}: ICardFooterProps) {
    return (
        <div
            className={clsx(className, 'flex items-center p-6 pt-0')}
            {...prop}>
            {children}
        </div>
    );
}
