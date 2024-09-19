import React from 'react';

interface ITabListProps {
    children: React.ReactNode;
    className?: string;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

export default function TabList({
    children,
    className,
    activeIndex,
    setActiveIndex,
    ...props
}: ITabListProps) {
    return (
        <div>
            <ul
                className={`${className} inline-flex h-10 items-center justify-center rounded-md bg-[#e9f0ff] p-1 text-[#6e7781] dark: dark:bg-[#2b2b36] dark:text-[#8b99a6]`}
                {...props}>
                {React.Children.map(children, (child, index) =>
                    React.cloneElement(child as React.ReactElement<any>, {
                        isActive: activeIndex === index,
                        onClick: () => setActiveIndex(index),
                    }),
                )}
            </ul>
        </div>
    );
}
