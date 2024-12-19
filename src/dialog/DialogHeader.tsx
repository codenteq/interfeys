import React from 'react';
import clsx from 'clsx';

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
            className={clsx(
                className,
                'flex flex-col space-y-1.5 text-center sm:text-left',
            )}
            {...props}>
            {children}
        </div>
    );
}
