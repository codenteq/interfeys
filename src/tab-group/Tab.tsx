import React from 'react';

interface TabProps {
    children: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}

export default function Tab({ children, isActive, onClick }: TabProps) {
    return (
        <li
            onClick={onClick}
            className={`truncate cursor-pointer p-4 max-w-xs whitespace-nowrap ${
                isActive ? 'text-brand border-b-2 border-brand' : 'text-zinc-500'
            }`}
        >
            {children}
        </li>
    );
}