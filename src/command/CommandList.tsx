import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import clsx from 'clsx';

const CommandList = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ ...props }, ref) => (
    <CommandPrimitive.List
        ref={ref}
        className={clsx('max-h-[300px] overflow-y-auto overflow-x-hidden')}
        {...props}
    />
));

CommandList.displayName = CommandPrimitive.List.displayName;

export default CommandList;
