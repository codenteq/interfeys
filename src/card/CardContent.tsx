import * as React from 'react';

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
        <div className={`${className} p-6 pt-0`} {...prop}>
            {children}
        </div>
    );
}
