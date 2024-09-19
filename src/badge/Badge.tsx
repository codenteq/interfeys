import React from 'react';
import clsx from 'clsx';

interface IBadgeProps {
    className?: string;
    children: React.ReactNode;
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

export default function Badge({
    className,
    children,
    variant = 'default',
}: IBadgeProps) {
    const variantClasses = {
        default:
            'border-transparent bg-[#0d0d26] text-[#f2f7ff] hover:bg-[#0d0d26]/80 dark:bg-[#f2f7ff] dark:text-[#0d0d26] dark:hover:bg-[#f2f7ff]/80',
        secondary:
            'border-transparent bg-[#e9f0ff] text-[#0d0d26] hover:bg-[#e9f0ff]/80 dark:bg-[#2b2b36] dark:text-[#f2f7ff] dark:hover:bg-[#2b2b36]/80',
        destructive:
            'border-transparent bg-[#f43f5e] text-[#f2f7ff] hover:bg-[#f43f5e]/80 dark:bg-[#993333] dark:text-[#f2f7ff] dark:hover:bg-[#993333]/80',
        outline: 'text-[#1c1c1c] dark:text-[#f2f7ff]',
    };

    return (
        <div
            className={clsx(
                'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                variantClasses[variant],
                className,
            )}>
            {children}
        </div>
    );
}
