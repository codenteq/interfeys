import React from 'react';
import clsx from 'clsx';

interface IDialogDescriptionProps
    extends React.HTMLProps<HTMLParagraphElement> {
    className?: string;
    children: React.ReactNode;
}

export default function DialogDescription({
    className,
    children,
    ...props
}: IDialogDescriptionProps) {
    return (
        <p
            className={clsx(
                className,
                'text-sm text-[#6e7781] dark:text-[#8b99a6]',
            )}
            {...props}>
            {children}
        </p>
    );
}
