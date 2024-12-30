import React from 'react';
import clsx from 'clsx';

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={clsx(
                'animate-pulse rounded-md bg-[#e2e8f0]/90 dark:bg-[#e2e8f0]/10',
                className,
            )}
            {...props}
        />
    );
}

export default Skeleton;
