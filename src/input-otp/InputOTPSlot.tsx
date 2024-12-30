import * as React from 'react';
import { OTPInputContext } from 'input-otp';
import clsx from 'clsx';

const InputOTPSlot = React.forwardRef<
    React.ElementRef<'div'>,
    React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
    const inputOTPContext = React.useContext(OTPInputContext);
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

    return (
        <div
            ref={ref}
            className={clsx(
                'relative flex h-9 w-9 items-center justify-center border-y border-r border-[#e9f0ff] dark:border-[#8b99a6] text-sm text-[#020617] dark:text-white shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
                isActive && 'z-10 ring-1 ring-brand',
                className,
            )}
            {...props}>
            {char}
            {hasFakeCaret && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="h-4 w-px bg-brand duration-1000" />
                </div>
            )}
        </div>
    );
});
InputOTPSlot.displayName = 'InputOTPSlot';

export default InputOTPSlot;
