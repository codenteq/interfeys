import React, {
    ChangeEvent,
    forwardRef,
    InputHTMLAttributes,
    Ref,
} from 'react';
import Label from '../label/Label';

interface ISwitchProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    className?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    disabled?: boolean;
    checked?: boolean;
    label?: string;
    id?: string;
    messages?: string | string[];
}

const Switch = forwardRef(
    (
        {
            className,
            value,
            onChange,
            required,
            disabled,
            checked,
            label,
            id,
            messages = [],
            ...props
        }: ISwitchProps,
        ref: Ref<HTMLInputElement>,
    ) => (
        <div>
            <label
                className={`relative inline-flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                <input
                    id={id}
                    ref={ref}
                    type={'checkbox'}
                    value={value}
                    onChange={onChange}
                    className={`${className} sr-only peer`}
                    required={required}
                    disabled={disabled}
                    checked={checked}
                    {...props}
                />
                <div className="w-11 h-6 bg-zinc-300 rounded-full peer dark:bg-zinc-900 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-600 peer-checked:bg-brand" />
                {label && <Label htmlFor={id} className="ml-5">{label}</Label>}
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
