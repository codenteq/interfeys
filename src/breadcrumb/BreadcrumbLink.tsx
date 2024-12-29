import * as React from 'react';
import clsx from 'clsx';

const BreadcrumbLink = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<'a'> & {
        asChild?: boolean;
        component?: React.ElementType;
    }
>(({ asChild, component: Component = 'a', className, ...props }, ref) => {
    const Comp = asChild && Component ? Component : 'a';

    return (
        <Comp
            ref={ref}
            className={clsx(
                'transition-colors text-[#475569] hover:text-[#020617] dark:text-[#cbd5e1] dark:hover:text-white',
                className,
            )}
            {...props}
        />
    );
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

export default BreadcrumbLink;
