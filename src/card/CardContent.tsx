import * as React from 'react';
import clsx from 'clsx';

interface ICardContentProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export default function CardContent({
    className,
    children,
    ...prop
}: ICardContentProps) {
    return (
        <div className={clsx(className, 'p-6 pt-0')} {...prop}>
            {children}
        </div>
    );
}
