import React, { forwardRef, Ref, TextareaHTMLAttributes } from 'react';

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    rows?: number;
    cols?: number;
    value?: string;
    className?: string;
    minLength?: number;
    maxLength?: number;
    autoFocus?: boolean;
    required?: boolean;
    disabled?: boolean;
    helpText?: string;
}

const Textarea = forwardRef(
    (
        {
            rows,
            cols,
            className,
            value,
            placeholder,
            minLength,
            maxLength,
            autoFocus,
            required,
            disabled,
            helpText,
            ...props
        }: ITextareaProps,
        ref: Ref<HTMLTextAreaElement>,
    ) => (
        <div>
            <textarea
                ref={ref}
                rows={rows}
                cols={cols}
                value={value}
                placeholder={placeholder}
                className={`${className} resize transition placeholder:transition caret-brand hover:border-zinc-900 dark:hover:border-zinc-300 hover:placeholder:text-zinc-900 dark:hover:placeholder:text-zinc-300 focus:ring-transparent focus:border-zinc-900 dark:focus:border-zinc-300 dark:bg-black text-zinc-900 dark:text-zinc-300 focus:placeholder:text-zinc-900 dark:focus:placeholder:text-zinc-300 rounded-lg p-2.5`}
                minLength={minLength}
                maxLength={maxLength}
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
        </div>
    ),
);
Textarea.displayName = 'Textarea';

export default Textarea;
