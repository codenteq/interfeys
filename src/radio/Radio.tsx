'use client';

import React, { ChangeEvent, InputHTMLAttributes } from 'react';

type InputType = 'radio';

interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    type: InputType;
    value?: string;
    className?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
    messages?: string[];
}

export default function Radio({
    className,
    type,
    value,
    onChange,
    required,
    disabled,
    messages = [],
    ...props
}: IRadioProps) {
    return (
        <div>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={`${className} transition text-brand bg-white focus:ring-brand dark:ring-offset-zinc-900 focus:ring-1 dark:bg-black dark:border-zinc-600 hover:border-zinc-900 dark:hover:border-zinc-300 focus:border-zinc-900 dark:focus:border-zinc-300 rounded-full p-2.5`}
                required={required}
                disabled={disabled}
                {...props}
            />
            {messages.length > 0 && (
                <>
                    {messages.map((message, index) => (
                        <p className="text-sm text-red-600" key={index}>
                            {message}
                        </p>
                    ))}
                </>
            )}
        </div>
    );
}
