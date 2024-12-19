import React from 'react';
import clsx from 'clsx';

interface TabPanelsProps {
    className?: string;
    children: React.ReactNode;
    activeIndex?: number;
}

export default function TabPanels({
    className,
    children,
    activeIndex,
    ...props
}: TabPanelsProps) {
    return (
        <div className={clsx(className, 'mt-2')} {...props}>
            {React.Children.map(children, (child, index) =>
                activeIndex === index ? child : null,
            )}
        </div>
    );
}
