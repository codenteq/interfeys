import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../button/Button';
import clsx from 'clsx';

interface IModalProps {
    children: React.ReactNode;
    className?: string;
    title: string;
    isOpen: boolean;
    setIsOpen(value: boolean): void;
}

export default function Modal({
    children,
    className,
    title,
    isOpen,
    setIsOpen,
}: IModalProps) {
    const [isOnClose, setIsOnClose] = useState(isOpen);

    const onClose = () => {
        setIsOnClose(false);
        setTimeout(() => setIsOpen(false), 300);
    };

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <AnimatePresence>
            {isOnClose && isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    key="modal"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="fixed inset-0 z-50 w-full h-full flex justify-center items-center">
                    <div className="flex items-center relative md:max-w-2xl md:max-h-[50%] w-full h-full md:h-auto">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            key="modal"
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="relative w-full h-full overflow-auto bg-white dark:bg-black border border-[#e4e4e7] dark:border-[#27272a] md:rounded-lg">
                            <div className="flex items-center justify-between p-4 border-b border-zinc-100 dark:border-zinc-900 rounded-t">
                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                                    {title}
                                </h3>
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
                            <div className={clsx(className, 'p-6 space-y-6')}>
                                {children}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
            {isOnClose && isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="backdrop-blur-sm dark:bg-black/30 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"
                />
            )}
        </AnimatePresence>
    );
}
