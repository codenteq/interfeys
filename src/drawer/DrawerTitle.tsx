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
            className={`${className} text-lg font-semibold leading-none text-[#1c1c1c] dark:text-[#f2f7ff] tracking-tight`}
            {...props}>
            {children}
        </h3>
    );
}
