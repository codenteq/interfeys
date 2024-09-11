import React, {
    ChangeEvent,
    forwardRef,
    InputHTMLAttributes,
    Ref,
} from 'react';

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = forwardRef(
    ({ className, ...props }: ICheckboxProps, ref: Ref<HTMLInputElement>) => {
        return (
            <input
                ref={ref}
                type="checkbox"
                className={`${className} peer h-4 w-4 shrink-0 rounded-sm border border-[#0d0d26] focus:ring-[#1c1c1c] disabled:cursor-not-allowed disabled:opacity-50 bg-[#f2f7ff] text-[#0d0d26] dark:border-[#f2f7ff] dark:focus:ring-white dark:bg-[#0d0d26] dark:text-[#f2f7ff]`}
                {...props}
            />
        );
    },
);
Checkbox.displayName = 'Input';

export default Checkbox;
