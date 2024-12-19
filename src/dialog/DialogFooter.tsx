import React from 'react';
import clsx from 'clsx';

interface IDialogFooterProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export default function DialogFooter({
    className,
    children,
    ...props
}: IDialogFooterProps) {
    return (
        <div
            className={clsx(
                className,
                'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
            )}
            {...props}>
            {children}
        </div>
    );
}
