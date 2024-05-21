import React, { forwardRef, Ref, SelectHTMLAttributes } from 'react';

interface Option {
    value: string;
    label: string;
}

interface OptGroup {
    label: string;
    options: Option[];
    disabled?: boolean;
}

interface IOptGroupProps extends SelectHTMLAttributes<HTMLSelectElement> {
    groups: OptGroup[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    messages?: string | string[];
}

const OptGroup = forwardRef(
    (
        {
            groups,
            onChange,
            className,
            required,
            disabled,
            placeholder,
            messages = [],
            ...props
        }: IOptGroupProps,
        ref: Ref<HTMLSelectElement>,
    ) => (
        <div>
            <select
                ref={ref}
                onChange={onChange}
                className={`${className} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} w-full text-sm transition placeholder-transition hover:border-zinc-900 dark:hover:border-zinc-300 hover:placeholder-text-zinc-900 dark:hover:placeholder-text-zinc-300 focus:ring-transparent focus:border-zinc-900 dark:focus:border-zinc-300 bg-white dark:bg-black text-zinc-900 dark:text-zinc-300 focus:placeholder-text-zinc-900 dark:focus:placeholder-text-zinc-300 rounded-lg p-3`}
                required={required}
                disabled={disabled}
                {...props}>
                {placeholder && (
                    <option disabled selected>
                        {placeholder}
                    </option>
                )}
                {groups.map((group, index) => (
                    <optgroup
                        key={index}
                        label={group.label}
                        disabled={group.disabled}>
                        {group.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </optgroup>
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
    ),
);
OptGroup.displayName = 'OptGroup';

export default OptGroup;
