import React, {
    ChangeEvent,
    forwardRef,
    InputHTMLAttributes,
    Ref,
} from 'react';

type InputType = 'checkbox';

interface ISwitchProps extends InputHTMLAttributes<HTMLInputElement> {
    type: InputType;
    value?: string;
    className?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
    messages?: string | string[];
}

const Switch = forwardRef(
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
        }: ISwitchProps,
        ref: Ref<HTMLInputElement>,
    ) => (
        <div>
            <label className="relative inline-flex items-center mr-5 cursor-pointer">
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChange}
                    className={`${className} sr-only peer`}
                    required={required}
                    disabled={disabled}
                    {...props}
                />
                <div className="w-11 h-6 bg-zinc-300 rounded-full peer dark:bg-zinc-900 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-600 peer-checked:bg-brand" />
            </label>
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
Switch.displayName = 'Switch';

export default Switch;
