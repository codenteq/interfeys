import React, { forwardRef, Ref, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

const Textarea = forwardRef(
    (
        { className, ...props }: ITextareaProps,
        ref: Ref<HTMLTextAreaElement>,
    ) => (
        <div>
            <textarea
                ref={ref}
                {...props}
                className={clsx(
                    className,
                    'w-full transition placeholder:transition focus:ring-transparent file:border-0 file:text-sm file:font-medium rounded-lg p-2.5 caret-[#0c6ba8] hover:border-[#18181b] dark:hover:border-[#d4d4d8] hover:placeholder:text-[#18181b] dark:hover:placeholder:text-[#d4d4d8] bg-white dark:bg-black text-[#18181b] dark:text-[#d4d4d8] focus:border-[#18181b] dark:focus:border-[#d4d4d8] focus:placeholder:text-[#18181b] dark:focus:placeholder:text-[#d4d4d8] file:text-[#1c1c1c] disabled:cursor-not-allowed disabled:opacity-50',
                )}
            />
        </div>
    ),
);
Textarea.displayName = 'Textarea';

export default Textarea;
