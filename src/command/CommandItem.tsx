import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import clsx from 'clsx';

const CommandItem = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ ...props }, ref) => (
    <CommandPrimitive.Item
        ref={ref}
        className={clsx(
            'relative flex gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-[#e4e4e7] dark:data-[selected=true]:bg-[#27272a] data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        )}
        {...props}
    />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

export default CommandItem;
