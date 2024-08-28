import React from 'react';

interface TabPanelProps {
    children: React.ReactNode;
}

export default function TabPanel({ children }: TabPanelProps) {
    return <div className="w-full mt-4">{children}</div>;
}