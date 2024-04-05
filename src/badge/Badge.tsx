import React from 'react';

interface IBadgeProps {
    className?: string;
    children: React.ReactNode;
}

export default function Badge({ className, children }: IBadgeProps) {
    return (
        <span className={`${className} font-medium me-2 px-2.5 py-0.5 rounded`}>
            {children}
        </span>
    );
}
