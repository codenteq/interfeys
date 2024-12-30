import * as React from 'react';
import clsx from 'clsx';

const InputOTPGroup = React.forwardRef<
    React.ElementRef<'div'>,
    React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={clsx('flex items-center', className)}
        {...props}
    />
));
InputOTPGroup.displayName = 'InputOTPGroup';

export default InputOTPGroup;
