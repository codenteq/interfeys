import React from 'react';

interface IDialogHeaderProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export default function DialogHeader({
    className,
    children,
    ...props
}: IDialogHeaderProps) {
    return (
        <div
            className={`${className} flex flex-col space-y-1.5 text-center sm:text-left`}
            {...props}>
            {children}
        </div>
    );
}
