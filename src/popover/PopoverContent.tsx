import React from 'react';
import { motion } from 'framer-motion';

interface IPopoverContentProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
}

export default function PopoverContent({ children }: IPopoverContentProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1, x: 0, y: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}>
            <div className="z-50 w-72 rounded-md border bg-white dark:bg-[#1c1c1c] p-4 mt-1 text-[#1c1c1c] dark:text-[#f2f7ff] shadow-md outline-none">
                {children}
            </div>
        </motion.div>
    );
}
