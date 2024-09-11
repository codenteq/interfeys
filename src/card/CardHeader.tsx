import * as React from 'react';

interface ICardHeaderProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export default function CardHeader({
    className,
    children,
    ...prop
}: ICardHeaderProps) {
    return (
        <div className={`${className} flex flex-col space-y-1.5 p-6`} {...prop}>
            {children}
        </div>
    );
}
