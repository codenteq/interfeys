import React, { ReactNode } from 'react';

type IButtonType = 'button' | 'submit' | 'reset';
type IButtonVariant =
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
type IButtonSize = 'default' | 'sm' | 'lg' | 'icon';

interface IButtonProps {
    type: IButtonType;
    id?: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    isLoading?: boolean;
    loader?: string;
    label: string;
    variant?: IButtonVariant;
    size?: IButtonSize;
    children: ReactNode;
}

const variantClasses = {
    default:
        'bg-[#0d0d26] text-[#f2f7ff] hover:bg-[#0d0d26]/90 dark:bg-[#f2f7ff] dark:text-[#0d0d26] dark:hover:bg-[#f2f7ff]/90',
    destructive:
        'bg-[#f43f5e] text-[#f2f7ff] hover:bg-[#f43f5e]/90 dark:bg-[#993333] dark:text-[#f2f7ff] dark:hover:bg-[#993333]/90',
    outline:
        'border border-[#d0d7e6] bg-white hover:bg-[#e9f0ff] hover:text-[#0d0d26] dark:border-[#2b2b36] dark:bg-[#1c1c1c] dark:hover:bg-[#2b2b36] dark:hover:text-[#f2f7ff]',
    secondary:
        'bg-[#e9f0ff] text-[#0d0d26] hover:bg-[#e9f0ff]/80 dark:bg-[#2b2b36] dark:text-[#f2f7ff] dark:hover:bg-[#2b2b36]/80',
    ghost: 'hover:bg-[#e9f0ff] hover:text-[#0d0d26] dark:hover:bg-[#2b2b36] dark:hover:text-[#f2f7ff]',
    link: 'text-[#0d0d26] dark:text-[#f2f7ff] underline-offset-4 hover:underline',
};

const sizeClasses = {
    default: 'h-10 px-4 py-2 rounded-lg',
    sm: 'h-9 px-3 rounded-md',
    lg: 'h-11 px-8 rounded-md',
    icon: 'h-10 w-10 flex items-center justify-center',
};

export default function Button({
    type,
    id,
    disabled,
    className,
    isLoading = false,
    loader,
    label,
    variant = 'default',
    size = 'default',
    children,
    ...props
}: IButtonProps) {
    return (
        <button
            id={id}
            type={type}
            disabled={disabled}
            className={`${className} ${
                disabled ? 'cursor-not-allowed opacity-50' : ''
            } ${variantClasses[variant]} ${sizeClasses[size]}`}
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
                children
            )}
        </button>
    );
}
