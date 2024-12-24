import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../button/Button';
import clsx from 'clsx';

interface IDialogContentProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
    onClose?: () => void;
}

export default function DialogContent({
    className,
    children,
    onClose,
    ...props
}: IDialogContentProps) {
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && onClose) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [onClose]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dialogRef.current &&
                !dialogRef.current.contains(event.target as Node) &&
                onClose
            ) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 1, x: 0, y: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}>
            <div
                ref={dialogRef}
                className={clsx(
                    className,
                    'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-[#e4e4e7] dark:border-[#27272a] bg-white dark:bg-black p-6 shadow-lg duration-200 sm:rounded-lg',
                )}
                {...props}>
                {children}
                <div className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#1c1c1c] focus:ring-offset-2 disabled:pointer-events-none bg-[#e9f0ff] text-[#6e7781]">
                    <Button
                        className="w-5 h-5"
                        type="button"
                        size="icon"
                        variant="outline"
                        onClick={onClose}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </Button>
                    <span className="sr-only">Close</span>
                </div>
            </div>
        </motion.div>
    );
}
