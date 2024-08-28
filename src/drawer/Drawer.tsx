import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

interface IDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Drawer({ isOpen, onClose, children }: IDrawerProps) {
    const [dragging, setDragging] = useState(false);
    const isMobile = window.innerWidth <= 768;

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isOpen, onClose]);

    const handleDragEnd = (
        _event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo,
    ) => {
        if (info.offset.y > 100 || info.offset.y > window.innerHeight / 2) {
            onClose();
        }
        setDragging(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`fixed inset-0 z-50 ${
                        isMobile
                            ? 'flex items-end'
                            : 'flex items-center justify-end'
                    } overflow-x-hidden backdrop-blur-sm bg-black/10 dark:bg-black/30 bg-opacity-50 dark:bg-opacity-80`}>
                    <motion.div
                        initial={{
                            y: isMobile ? '100%' : '0%',
                            x: isMobile ? '0%' : '100%',
                        }}
                        animate={{
                            y: isMobile ? (dragging ? '100%' : '50%') : '0%',
                            x: isMobile ? '0%' : '0%',
                        }}
                        exit={{
                            y: isMobile ? '100%' : '0%',
                            x: isMobile ? '0%' : '100%',
                        }}
                        drag={isMobile ? 'y' : false}
                        dragConstraints={
                            isMobile
                                ? { top: 0, bottom: window.innerHeight / 2 }
                                : undefined
                        }
                        onDragStart={() => isMobile && setDragging(true)}
                        onDragEnd={isMobile ? handleDragEnd : undefined}
                        transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 30,
                        }}
                        className={`shadow-2xl bg-white dark:bg-black border-brand ${
                            isMobile
                                ? 'w-full h-full border-t'
                                : 'w-80 h-full border-l'
                        } shadow-xl overflow-y-auto relative`}>
                        {isMobile && (
                            <span className="absolute w-10 h-1 -translate-x-1/2 bg-zinc-300 rounded-lg top-3 left-1/2 dark:bg-zinc-600" />
                        )}
                        <div className="px-4 py-6">{children}</div>
                    </motion.div>
                    {!isMobile && (
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
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}