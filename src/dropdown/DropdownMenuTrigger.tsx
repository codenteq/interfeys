import * as React from 'react';
import clsx from 'clsx';

const DropdownMenuTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
    // eslint-disable-next-line react/prop-types
>(({ className, children, ...props }, ref) => (
    <button
        ref={ref}
        className={clsx('px-4 py-2', className)}
        type="button"
        {...props}>
        {children}
    </button>
));
DropdownMenuTrigger.displayName = 'DropdownMenuTrigger';

export default DropdownMenuTrigger;
