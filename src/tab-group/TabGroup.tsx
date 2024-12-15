import React, { useState } from 'react';

interface TabGroupProps {
    className?: string;
    defaultIndex?: number;
    children: React.ReactNode;
}

export default function TabGroup({
    className,
    defaultIndex = 0,
    children,
    ...props
}: TabGroupProps) {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    return (
        <div className={className} {...props}>
            {React.Children.map(children, child =>
                React.cloneElement(child as React.ReactElement<any>, {
                    activeIndex,
                    setActiveIndex,
                }),
            )}
        </div>
    );
}
