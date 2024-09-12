import React from 'react';
import { motion } from 'framer-motion';

interface IDrawerProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export default function Drawer({
    className,
    children,
    ...props
}: IDrawerProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}>
            <div
                className={`${className} fixed inset-0 z-50 backdrop-blur-sm bg-black/50`}
                {...props}>
                {children}
            </div>
        </motion.div>
    );
}
