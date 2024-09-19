import React from 'react';

interface IPopoverTriggerProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export default function PopoverTrigger({
    className,
    children,
    ...props
}: IPopoverTriggerProps) {
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
}
