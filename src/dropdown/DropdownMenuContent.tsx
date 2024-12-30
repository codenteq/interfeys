import * as React from 'react';
import clsx from 'clsx';

const DropdownMenuContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
    <div
        ref={ref}
        className={clsx(
            'border border-[#e4e4e7] dark:border-[#27272a] bg-white text-[#18181b] dark:bg-black dark:text-white rounded-md',
            className,
        )}
        {...props}>
        {children}
    </div>
));
DropdownMenuContent.displayName = 'DropdownMenuContent';

export default DropdownMenuContent;
