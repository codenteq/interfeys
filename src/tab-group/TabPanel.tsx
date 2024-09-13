import React from 'react';

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
        <div className={`${className} w-full mt-4`} {...props}>
            {children}
        </div>
    );
}
