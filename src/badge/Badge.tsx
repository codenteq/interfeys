'use client';

import React from 'react';

interface IBadgeProps {
    className?: string;
    name: string;
}

export default function Badge({ className, name }: IBadgeProps) {
    return (
        <span
            className={`${className} bg-brand text-white px-2.5 py-0.5 rounded uppercase`}>
            {name}
        </span>
    );
}
