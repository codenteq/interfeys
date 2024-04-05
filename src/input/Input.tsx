import React, {
    ChangeEvent,
    forwardRef,
    InputHTMLAttributes,
    Ref,
    useState,
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
    ) => {
        const [showPassword, setShowPassword] = useState(false);

        const toggleShowPassword = () => {
            setShowPassword(!showPassword);
        };

        return (
            <div>
                {label && <Label>{label}</Label>}
                <div className="relative">
                    <input
                        ref={ref}
                        type={
                            type === 'password' && !showPassword
                                ? 'password'
                                : 'text'
                        }
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className={`${className} ${disabled ? 'cursor-not-allowed' : ''} transition placeholder:transition caret-brand accent-brand hover:border-zinc-900 dark:hover:border-zinc-300 hover:placeholder:text-zinc-900 dark:hover:placeholder:text-zinc-300 focus:ring-transparent focus:border-zinc-900 dark:focus:border-zinc-300 dark:bg-black text-zinc-900 dark:text-zinc-300 focus:placeholder:text-zinc-900 dark:focus:placeholder:text-zinc-300 rounded-lg p-2.5`}
                        autoFocus={autoFocus}
                        required={required}
                        disabled={disabled}
                        {...props}
                    />
                    {type === 'password' && (
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center px-2"
                            onClick={toggleShowPassword}>
                            {showPassword ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                    />
                                </svg>
                            )}
                        </button>
                    )}
                </div>
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
        );
    },
);
Input.displayName = 'Input';

export default Input;
