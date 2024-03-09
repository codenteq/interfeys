import React from 'react';

type IButtonType = 'button' | 'submit' | 'reset';

interface IButtonProps {
    type: IButtonType;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    isLoading?: boolean;
    loader?: string;
    label: string;
}

export default function Button({
    type,
    disabled,
    className,
    isLoading = false,
    loader,
    label,
    ...props
}: IButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`${className} dark:text-white text-zinc-900 border border-brand hover:bg-brand hover:text-white transition-all rounded-lg px-4 py-2`}
            {...props}>
            {isLoading ? (
                <div className="inline-flex gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-clockwise w-4 h-4 self-center animate-spin"
                        viewBox="0 0 16 16">
                        <path
                            fillRule="evenodd"
                            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                        />
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                    </svg>
                    <span className="text-sm">{loader}</span>
                </div>
            ) : (
                label
            )}
        </button>
    );
}
