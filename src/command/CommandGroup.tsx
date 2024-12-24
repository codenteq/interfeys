import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import clsx from 'clsx';

const CommandGroup = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Group>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ ...props }, ref) => (
    <CommandPrimitive.Group
        ref={ref}
        className={clsx(
            'overflow-hidden p-1 text-[#18181b] dark:text-white [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
        )}
        {...props}
    />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

export default CommandGroup;
