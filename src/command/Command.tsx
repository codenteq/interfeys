import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import clsx from 'clsx';

const Command = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ ...props }, ref) => (
    <CommandPrimitive
        ref={ref}
        className={clsx(
            'flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-[#18181b] dark:bg-black dark:text-white',
        )}
        {...props}
    />
));
Command.displayName = CommandPrimitive.displayName;

export default Command;
