import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface IDialogProps {
    isOpen: boolean;
    setIsOpen(value: boolean): void;
    children: React.ReactNode;
}

export default function Dialog({ isOpen, setIsOpen, children }: IDialogProps) {
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
                    className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            key="modal"
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="relative bg-white rounded-lg shadow dark:bg-black">
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.2 }}
                                onClick={onClose}
                                type={'button'}
                                className="absolute top-3 end-2.5 bg-transparent p-1.5 hover:bg-zinc-200 hover:dark:bg-zinc-800 rounded-full duration-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="w-5 h-5 text-zinc-700 dark:text-zinc-400"
                                    viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                </svg>
                            </motion.button>
                            <div className="pt-12 p-4 md:p-5 text-center">
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
