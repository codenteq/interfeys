import React, { forwardRef, Ref, SelectHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    children: React.ReactNode;
    className?: string;
}

const Select = forwardRef(
    (
        { children, className, ...props }: ISelectProps,
        ref: Ref<HTMLSelectElement>,
    ) => (
        <>
            <select
                ref={ref}
                {...props}
                className={clsx(
                    className,
                    'w-full transition placeholder:transition focus:ring-transparent rounded-lg p-2.5 caret-[#0c6ba8] hover:border-[#18181b] dark:hover:border-[#d4d4d8] hover:placeholder:text-[#18181b] dark:hover:placeholder:text-[#d4d4d8] bg-white dark:bg-black text-[#18181b] dark:text-[#d4d4d8] focus:border-[#18181b] dark:focus:border-[#d4d4d8] focus:placeholder:text-[#18181b] dark:focus:placeholder:text-[#d4d4d8] disabled:cursor-not-allowed disabled:opacity-50',
                )}>
                {children}
            </select>
        </>
    ),
);
Select.displayName = 'Select';

export default Select;
