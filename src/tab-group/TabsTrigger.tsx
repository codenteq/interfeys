import React from 'react';

interface TabProps {
    className?: string;
    children: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}

export default function TabsTrigger({
    className,
    children,
    isActive,
    onClick,
    ...props
}: TabProps) {
    return (
        <li
            onClick={onClick}
            className={`${className} inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all cursor-pointer ${
                isActive ? 'bg-white text-[#1c1c1c] shadow-sm' : ''
            }`}
            {...props}>
            {children}
        </li>
    );
}
