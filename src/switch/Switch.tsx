import React, {
    ChangeEvent,
    forwardRef,
    InputHTMLAttributes,
    Ref,
} from 'react';

interface ISwitchProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    messages?: string | string[];
}

const Switch = forwardRef(
    (
        { className, onChange, messages = [], ...props }: ISwitchProps,
        ref: Ref<HTMLInputElement>,
    ) => (
        <>
            <label className={`relative inline-flex items-center`}>
                <input
                    ref={ref}
                    type={'checkbox'}
                    onChange={onChange}
                    className={`${className} sr-only peer`}
                    {...props}
                />
                <div className="w-11 h-6 bg-[#0d0d26] rounded-full peer dark:bg-[#2b2b36] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#ffffff] dark:after:bg-[#1c1c1c] after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-600 peer-checked:bg-[#d0d7e6] dark:peer-checked:bg-[#0d0d26] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50" />
            </label>
            {messages.length > 0 && Array.isArray(messages) ? (
                <>
                    {messages.map((message, index) => (
                        <p className="text-sm text-[#f43f5e]" key={index}>
                            {message}
                        </p>
                    ))}
                </>
            ) : (
                <p className="text-sm text-[#f43f5e]">{messages}</p>
            )}
        </>
    ),
);
Switch.displayName = 'Switch';

export default Switch;
