import * as React from 'react';

const InputOTPSeparator = React.forwardRef<
    React.ElementRef<'div'>,
    React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
    <div
        ref={ref}
        role="separator"
        {...props}
        className="text-[#0d0d26] dark:text-[#f2f7ff]">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
    </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

export default InputOTPSeparator;
