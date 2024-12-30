import * as React from 'react';
import clsx from 'clsx';

const CommandShortcut = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    return (
        <span
            className={clsx(
                'ml-auto text-xs tracking-widest text-[#6e7781] dark:text-[#8b99a6]',
                className,
            )}
            {...props}
        />
    );
};
CommandShortcut.displayName = 'CommandShortcut';

export default CommandShortcut;
