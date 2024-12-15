import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface IDialogProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export default function Dialog({
    className,
    children,
    ...props
}: IDialogProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}>
            <div
                className={clsx(
                    className,
                    'fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30 z-50',
                )}
                {...props}>
                {children}
            </div>
        </motion.div>
    );
}
