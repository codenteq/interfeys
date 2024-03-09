'use client';

import React, { SelectHTMLAttributes } from 'react';

interface SelectOption {
    label: string;
    value: string | number;
}

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOption[];
    value?: string;
    placeholder?: string;
    className?: string;
    required?: boolean;
    disabled?: boolean;
    messages?: string | string[];
}

export default function Select({
    options,
    value,
    placeholder,
    className,
    required,
    disabled,
    messages = [],
    ...props
}: ISelectProps) {
    return (
        <div>
            <select
                value={value}
                className={`${className} w-full text-sm transition placeholder-transition hover:border-zinc-900 dark:hover:border-zinc-300 hover:placeholder-text-zinc-900 dark:hover:placeholder-text-zinc-300 focus:ring-transparent focus:border-zinc-900 dark:focus:border-zinc-300 bg-white dark:bg-black text-zinc-900 dark:text-zinc-300 focus:placeholder-text-zinc-900 dark:focus:placeholder-text-zinc-300 rounded-lg p-3`}
                disabled={disabled}
                required={required}
                {...props}>
                {placeholder && (
                    <option disabled selected>
                        {placeholder}
                    </option>
                )}
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
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
        </div>
    );
}
