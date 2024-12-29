import * as React from 'react';
import clsx from 'clsx';

const DropdownMenuItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
    <div
        ref={ref}
        className={clsx(
            'relative flex gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-[#e4e4e7] dark:hover:bg-[#27272a]',
            className,
        )}
        {...props}>
        {children}
    </div>
));
DropdownMenuItem.displayName = 'DropdownMenuItem';

export default DropdownMenuItem;
