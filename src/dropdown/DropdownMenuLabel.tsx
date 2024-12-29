import * as React from 'react';
import clsx from 'clsx';

const DropdownMenuLabel = ({
    children,
    className,
    ...props
}: React.HTMLProps<HTMLDivElement>) => (
    <div
        className={clsx('px-4 py-1.5 text-sm font-semibold', className)}
        {...props}>
        {children}
    </div>
);

export default DropdownMenuLabel;
