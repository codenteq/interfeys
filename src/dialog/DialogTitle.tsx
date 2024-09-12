import React from 'react';

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
            className={`${className}text-lg font-semibold leading-none tracking-tight`}
            {...props}>
            {children}
        </h3>
    );
}
