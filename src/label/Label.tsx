import React from 'react';

interface ILabelProps extends React.HTMLProps<HTMLLabelElement> {
    className?: string;
    children: React.ReactNode;
    htmlFor?: string;
}

export default function Label({
    className,
    children,
    htmlFor,
    ...props
}: ILabelProps) {
    return (
        <label
            className={`${className} text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
            htmlFor={htmlFor}
            {...props}>
            {children}
        </label>
    );
}
