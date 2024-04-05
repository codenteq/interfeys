import React from 'react';
import './badge.css'

interface IBadgeProps {
    className?: string;
    children: React.ReactNode;
}

export default function Badge({ className, children }: IBadgeProps) {
    return (
        <span
            className={`${className} badge`}>
            {children}
        </span>
    );
}
