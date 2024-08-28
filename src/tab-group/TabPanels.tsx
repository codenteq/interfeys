import React from 'react';

interface TabPanelsProps {
    children: React.ReactNode;
    activeIndex: number;
}

export default function TabPanels({ children, activeIndex }: TabPanelsProps) {
    return (
        <div>
            {React.Children.map(children, (child, index) =>
                activeIndex === index ? child : null
            )}
        </div>
    );
}