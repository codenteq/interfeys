import * as React from 'react';
import { OTPInput } from 'input-otp';
import clsx from 'clsx';

const InputOTP = React.forwardRef<
    React.ElementRef<typeof OTPInput>,
    React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
    <OTPInput
        ref={ref}
        containerClassName={clsx(
            'flex items-center gap-2 has-[:disabled]:opacity-50',
            containerClassName,
        )}
        className={clsx('disabled:cursor-not-allowed', className)}
        {...props}
    />
));
InputOTP.displayName = 'InputOTP';

export default InputOTP;
