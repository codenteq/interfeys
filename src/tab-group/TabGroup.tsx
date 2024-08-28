import React, { useState } from 'react';

interface TabGroupProps {
    defaultIndex?: number;
    children: React.ReactNode;
}

export default function TabGroup({ defaultIndex = 0, children }: TabGroupProps) {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    return (
        <div>
            {React.Children.map(children, (child) =>
                React.cloneElement(child as React.ReactElement<any>, {
                    activeIndex,
                    setActiveIndex,
                })
            )}
        </div>
    );
}