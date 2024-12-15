import React from 'react';
import clsx from 'clsx';

interface ITabListProps {
    children: React.ReactNode;
    className?: string;
    activeIndex?: number;
    setActiveIndex?: (index: number) => void;
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
                className={clsx(
                    'inline-flex h-10 items-center justify-center rounded-md bg-[#e4e4e7] p-1 text-[#6e7781] dark:bg-[#27272a] dark:text-[#8b99a6]',
                    className,
                )}
                {...props}>
                {React.Children.map(children, (child, index) =>
                    React.cloneElement(child as React.ReactElement<any>, {
                        isActive: activeIndex === index,
                        onClick: setActiveIndex
                            ? () => setActiveIndex(index)
                            : undefined,
                    }),
                )}
            </ul>
        </div>
    );
}
