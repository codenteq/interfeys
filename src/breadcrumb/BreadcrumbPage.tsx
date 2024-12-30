import * as React from 'react';
import clsx from 'clsx';

const BreadcrumbPage = React.forwardRef<
    HTMLSpanElement,
    React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
    <span
        ref={ref}
        role="link"
        aria-disabled="true"
        aria-current="page"
        className={clsx(
            'font-normal text-[#020617] dark:text-white',
            className,
        )}
        {...props}
    />
));
BreadcrumbPage.displayName = 'BreadcrumbPage';

export default BreadcrumbPage;
