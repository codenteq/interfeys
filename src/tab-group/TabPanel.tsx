import React from 'react';
import clsx from 'clsx';

interface TabPanelProps {
    className?: string;
    children: React.ReactNode;
}

export default function TabPanel({
    className,
    children,
    ...props
}: TabPanelProps) {
    return (
        <div className={clsx(className, 'w-full mt-4')} {...props}>
            {children}
        </div>
    );
}
