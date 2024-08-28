import React from 'react';

interface TabListProps {
    children: React.ReactNode;
    className?: string;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

export default function TabList({ children, className = '', activeIndex, setActiveIndex }: TabListProps) {
    return (
        <div className={className}>
            <ul className="flex leading-5">
                {React.Children.map(children, (child, index) =>
                    React.cloneElement(child as React.ReactElement<any>, {
                        isActive: activeIndex === index,
                        onClick: () => setActiveIndex(index),
                    })
                )}
            </ul>
        </div>
    );
}