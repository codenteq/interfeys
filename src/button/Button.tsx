import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type IButtonVariant =
    | 'default'
    | 'primary'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
type IButtonSize = 'default' | 'sm' | 'lg' | 'icon';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    onClick?: () => void;
    isLoading?: boolean;
    loader?: string;
    variant?: IButtonVariant;
    size?: IButtonSize;
    children: ReactNode;
}

const variantClasses = {
    default:
        'dark:text-[#fff] text-[#18181b] bg-inherit hover:bg-[#0c6ba8] hover:text-[#fff] border border-[#0c6ba8] transition-all',
    primary:
        'bg-[#0d0d26] text-[#f2f7ff] hover:bg-[#0d0d26]/90 dark:bg-[#f2f7ff] dark:text-[#0d0d26] dark:hover:bg-[#f2f7ff]/90',
    destructive:
        'bg-[#f43f5e] text-[#f2f7ff] hover:bg-[#f43f5e]/90 dark:bg-[#993333] dark:text-[#f2f7ff] dark:hover:bg-[#993333]/90',
    outline:
        'border border-[#d0d7e6] text-[#0d0d26] dark:text-[#f2f7ff] bg-white hover:bg-[#e9f0ff] hover:text-[#0d0d26] dark:border-[#2b2b36] dark:bg-[#1c1c1c] dark:hover:bg-[#2b2b36] dark:hover:text-[#f2f7ff]',
    secondary:
        'bg-[#e9f0ff] text-[#0d0d26] hover:bg-[#e9f0ff]/80 dark:bg-[#2b2b36] dark:text-[#f2f7ff] dark:hover:bg-[#2b2b36]/80',
    ghost: 'text-[#0d0d26] dark:text-[#f2f7ff] hover:bg-[#e9f0ff] hover:text-[#0d0d26] dark:hover:bg-[#2b2b36] dark:hover:text-[#f2f7ff]',
    link: 'text-[#0d0d26] dark:text-[#f2f7ff] underline-offset-4 hover:underline',
};

const sizeClasses = {
    default: 'h-10 px-4 py-2 rounded-lg',
    sm: 'h-9 px-3 rounded-md',
    lg: 'h-11 px-8 rounded-md',
    icon: 'h-10 w-10 flex items-center justify-center',
};

export default function Button({
    className,
    isLoading = false,
    loader = 'Loading...',
    variant = 'default',
    size = 'default',
    children,
    ...props
}: IButtonProps) {
    return (
        <button
            {...props}
            className={clsx(
                className,
                variantClasses[variant],
                sizeClasses[size],
                'disabled:cursor-not-allowed disabled:opacity-50',
            )}>
            {isLoading ? (
                <div className="inline-flex gap-1">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 self-center animate-spin"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3a9 9 0 1 0 9 9"></path>
                    </svg>
                    <span>{loader}</span>
                </div>
            ) : (
                children
            )}
        </button>
    );
}
