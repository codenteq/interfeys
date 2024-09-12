import React from 'react';

interface IDrawerTitleProps extends React.HTMLProps<HTMLHeadingElement> {
    className?: string;
    children: React.ReactNode;
}

export default function DrawerTitle({
    className,
    children,
    ...props
}: IDrawerTitleProps) {
    return (
        <h3
            className={`${className} text-lg font-semibold leading-none tracking-tight`}
            {...props}>
            {children}
        </h3>
    );
}
