import * as React from 'react';

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
        <div className={`${className} flex items-center p-6 pt-0`} {...prop}>
            {children}
        </div>
    );
}
