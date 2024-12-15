import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface IDrawerContentProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
    onClose: () => void;
}

export default function DrawerContent({
    className,
    children,
    onClose,
    ...props
}: IDrawerContentProps) {
    const dialogRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dialogRef.current &&
                !dialogRef.current.contains(event.target as Node)
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
        <motion.div>
            <div
                ref={dialogRef}
                className={clsx(
                    className,
                    'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border-t border-[#e4e4e7] dark:border-[#27272a] bg-white dark:bg-black',
                )}
                {...props}>
                <div
                    onClick={onClose}
                    className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-[#e9f0ff] dark:bg-[#2b2b36]"
                />
                {children}
            </div>
        </motion.div>
    );
}
