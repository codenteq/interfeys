import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: IDrawerProps) {
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
            {isOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="fixed inset-0 z-50 flex items-center justify-end overflow-x-hidden backdrop-blur-sm dark:bg-black/30 bg-opacity-50 dark:bg-opacity-80">
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 30,
                            delay: 0.1,
                        }}
                        className="bg-white dark:bg-black border-l border-brand w-80 h-full shadow-xl overflow-y-auto">
                        <div className="px-4 py-6">{children}</div>
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2 }}
                        onClick={onClose}
                        className="fixed top-4 right-4 z-50 bg-transparent p-2 hover:bg-zinc-200 hover:dark:bg-zinc-800 rounded-full duration-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
