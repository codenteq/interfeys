import React from 'react';

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
            className={`${className} mt-auto flex flex-col gap-2 p-4`}
            {...props}>
            {children}
        </div>
    );
}
