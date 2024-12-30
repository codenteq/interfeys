import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import clsx from 'clsx';

const CommandSeparator = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ ...props }, ref) => (
    <CommandPrimitive.Separator
        ref={ref}
        className={clsx(
            '-mx-1 h-px border border-[#e4e4e7] dark:border-[#27272a]',
        )}
        {...props}
    />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

export default CommandSeparator;
