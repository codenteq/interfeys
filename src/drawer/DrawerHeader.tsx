import React from 'react';

interface IDrawerHeaderProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export default function DrawerHeader({
    className,
    children,
    ...props
}: IDrawerHeaderProps) {
    return (
        <div
            className={`${className} grid gap-1.5 p-4 text-center sm:text-left`}
            {...props}>
            {children}
        </div>
    );
}
