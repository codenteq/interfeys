import * as React from 'react';
import clsx from 'clsx';

const BreadcrumbList = React.forwardRef<
    HTMLOListElement,
    React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
    <ol
        ref={ref}
        className={clsx(
            'flex flex-wrap items-center gap-1.5 break-words text-sm text-[#020617] dark:text-white sm:gap-2.5',
            className,
        )}
        {...props}
    />
));
BreadcrumbList.displayName = 'BreadcrumbList';

export default BreadcrumbList;
