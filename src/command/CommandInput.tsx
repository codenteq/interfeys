import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import clsx from 'clsx';

const CommandInput = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Input>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ ...props }, ref) => (
    <div
        className="flex items-center border-b border-[#e4e4e7] dark:border-[#27272a] px-3"
        data-cmdk-input-wrapper="">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 h-4 w-4 shrink-0 opacity-50">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
        </svg>

        <CommandPrimitive.Input
            ref={ref}
            className={clsx(
                'flex h-10 w-full border-none focus:ring-0 placeholder:transition hover:placeholder:text-[#18181b] dark:hover:placeholder:text-[#d4d4d8] focus:placeholder:text-[#18181b] dark:focus:placeholder:text-[#d4d4d8] bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50',
            )}
            {...props}
        />
    </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

export default CommandInput;
