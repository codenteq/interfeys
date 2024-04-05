import React, {
    ChangeEvent,
    forwardRef,
    InputHTMLAttributes,
    Ref,
} from 'react';
import Label from '../label/Label';

type InputType =
    | 'text'
    | 'email'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'password'
    | 'number'
    | 'tel'
    | 'url'
    | 'file'
    | 'search'
    | 'checkbox'
    | 'range';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: InputType;
    value?: string | number;
    className?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    autoFocus?: boolean;
    required?: boolean;
    disabled?: boolean;
    helpText?: string;
    label?: string;
    messages?: string | string[];
}

const Input = forwardRef(
    (
        {
            className,
            type,
            value,
            onChange,
            placeholder,
            autoFocus,
            required,
            disabled,
            helpText,
            label,
            messages = [],
            ...props
        }: IInputProps,
        ref: Ref<HTMLInputElement>,
    ) => (
        <div>
            {label && <Label>{label}</Label>}
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`${className} transition placeholder:transition caret-brand accent-brand hover:border-zinc-900 dark:hover:border-zinc-300 hover:placeholder:text-zinc-900 dark:hover:placeholder:text-zinc-300 focus:ring-transparent focus:border-zinc-900 dark:focus:border-zinc-300 dark:bg-black text-zinc-900 dark:text-zinc-300 focus:placeholder:text-zinc-900 dark:focus:placeholder:text-zinc-300 rounded-lg p-2.5`}
                autoFocus={autoFocus}
                required={required}
                disabled={disabled}
                {...props}
            />
            {helpText && (
                <div className="block font-medium text-xs text-zinc-700 dark:text-zinc-400 mt-1.5">
                    {helpText}
                </div>
            )}
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
Input.displayName = 'Input';

export default Input;
