import React from 'react';

interface IPopoverProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export default function Popover({
    className,
    children,
    ...props
}: IPopoverProps) {
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
}
