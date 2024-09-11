import * as React from 'react';

interface ICardProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export default function Card({ className, children, ...prop }: ICardProps) {
    return (
        <div
            className={`${className} rounded-lg border bg-white text-[#1c1c1c] dark:bg-[#1c1c1c] dark:text-[#f2f7ff] shadow-sm`}
            {...prop}>
            {children}
        </div>
    );
}
