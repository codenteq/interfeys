import React, { forwardRef, Ref, SelectHTMLAttributes } from 'react';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    children: React.ReactNode;
    placeholder?: string;
    className?: string;
    messages?: string | string[];
}

const Select = forwardRef(
    (
        {
            children,
            placeholder,
            className,
            messages = [],
            ...props
        }: ISelectProps,
        ref: Ref<HTMLSelectElement>,
    ) => (
        <>
            <select
                ref={ref}
                {...props}
                className={`${className} transition placeholder:transition focus:ring-transparent file:border-0 file:text-sm file:font-medium rounded-lg p-2.5 border-[#d0d7e6] hover:border-[#2b2b36] dark:hover:border-[#2b2b36] hover:placeholder:text-[#6e7781] dark:hover:placeholder:text-[#8b99a6] bg-white dark:bg-[#1c1c1c] text-[#2b2b36] dark:text-[#e9f0ff] focus:border-[#2b2b36] dark:focus:border-[#2b2b36] focus:placeholder:text-[#6e7781] dark:focus:placeholder:text-[#8b99a6] file:text-[#1c1c1c] disabled:cursor-not-allowed disabled:opacity-50`}>
                {placeholder && (
                    <option disabled selected>
                        {placeholder}
                    </option>
                )}
                {children}
            </select>
            {messages.length > 0 && Array.isArray(messages) ? (
                <>
                    {messages.map((message, index) => (
                        <p className="text-sm text-red-600" key={index}>
                            {message}
                        </p>
                    ))}
                </>
            ) : (
                <p className="text-sm text-red-600">{messages}</p>
            )}
        </>
    ),
);
Select.displayName = 'Select';

export default Select;
