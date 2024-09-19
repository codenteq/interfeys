import React from 'react';

interface IDrawerDescriptionProps
    extends React.HTMLProps<HTMLParagraphElement> {
    className?: string;
    children: React.ReactNode;
}

export default function DrawerDescription({
    className,
    children,
    ...props
}: IDrawerDescriptionProps) {
    return (
        <p
            className={`${className} text-sm text-[#6e7781] dark:text-[#8b99a6]`}
            {...props}>
            {children}
        </p>
    );
}
