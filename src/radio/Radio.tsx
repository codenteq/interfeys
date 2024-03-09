import React, {
    ChangeEvent,
    forwardRef,
    InputHTMLAttributes,
    Ref,
} from 'react';

type InputType = 'radio';

interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    type: InputType;
    value?: string;
    className?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
    messages?: string | string[];
}

const Radio = forwardRef(
    (
        {
            className,
            type,
            value,
            onChange,
            required,
            disabled,
            messages = [],
            ...props
        }: IRadioProps,
        ref: Ref<HTMLInputElement>,
    ) => (
        <div>
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChange}
                className={`${className} transition text-brand bg-white focus:ring-brand dark:ring-offset-zinc-900 focus:ring-1 dark:bg-black dark:border-zinc-600 hover:border-zinc-900 dark:hover:border-zinc-300 focus:border-zinc-900 dark:focus:border-zinc-300 rounded-full p-2.5`}
                required={required}
                disabled={disabled}
                {...props}
            />
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
Radio.displayName = 'Radio';

export default Radio;
