import React, {
    ChangeEvent,
    forwardRef,
    InputHTMLAttributes,
    Ref,
    useState,
} from 'react';
import Button from '../button/Button';
import clsx from 'clsx';

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
    | 'radio'
    | 'hidden';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: InputType;
    className?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef(
    (
        { className, type, onChange, ...props }: IInputProps,
        ref: Ref<HTMLInputElement>,
    ) => {
        const [showPassword, setShowPassword] = useState(false);

        const toggleShowPassword = () => {
            setShowPassword(!showPassword);
        };

        return (
            <div className="relative">
                <input
                    ref={ref}
                    type={
                        type !== 'password'
                            ? type
                            : !showPassword
                              ? 'password'
                              : 'text'
                    }
                    onChange={onChange}
                    className={clsx(
                        className,
                        'w-full transition placeholder:transition focus:ring-transparent file:border-0 file:text-sm file:font-medium rounded-lg p-2.5 caret-[#0c6ba8] hover:border-[#18181b] dark:hover:border-[#d4d4d8] hover:placeholder:text-[#18181b] dark:hover:placeholder:text-[#d4d4d8] bg-white dark:bg-black text-[#18181b] dark:text-[#d4d4d8] focus:border-[#18181b] dark:focus:border-[#d4d4d8] focus:placeholder:text-[#18181b] dark:focus:placeholder:text-[#d4d4d8] file:text-[#1c1c1c] disabled:cursor-not-allowed disabled:opacity-50',
                    )}
                    {...props}
                />
                {type === 'password' && (
                    <Button
                        type="button"
                        variant="link"
                        size="icon"
                        className="absolute inset-y-0 right-0 !h-auto"
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
                    </Button>
                )}
            </div>
        );
    },
);
Input.displayName = 'Input';

export default Input;
