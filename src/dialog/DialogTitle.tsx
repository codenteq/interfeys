import React from 'react';
import clsx from 'clsx';

interface IDialogTitleProps extends React.HTMLProps<HTMLHeadingElement> {
    className?: string;
    children: React.ReactNode;
}

export default function DialogTitle({
    className,
    children,
    ...props
}: IDialogTitleProps) {
    return (
        <h3
            className={clsx(
                className,
                'text-lg font-semibold leading-none text-[#1c1c1c] dark:text-[#f2f7ff] tracking-tight',
            )}
            {...props}>
            {children}
        </h3>
    );
}
