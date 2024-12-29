import * as React from 'react';
import clsx from 'clsx';

const DropdownMenuSeparator = ({
    className,
    ...props
}: React.HTMLProps<HTMLHRElement>) => (
    <hr
        className={clsx(
            'my-1 border-t border-[#e4e4e7] dark:border-[#27272a]',
            className,
        )}
        {...props}
    />
);

export default DropdownMenuSeparator;
