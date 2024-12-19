import React from 'react';
import clsx from 'clsx';

interface IDrawerFooterProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export default function DrawerFooter({
    className,
    children,
    ...props
}: IDrawerFooterProps) {
    return (
        <div
            className={clsx(className, 'mt-auto flex flex-col gap-2 p-4')}
            {...props}>
            {children}
        </div>
    );
}
