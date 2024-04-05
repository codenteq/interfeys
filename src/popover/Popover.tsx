import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IPopoverProps {
    children: React.ReactNode;
    trigger: React.ReactNode;
}

export default function Popover({ children, trigger }: IPopoverProps) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopover = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="relative inline-block">
            <div onClick={togglePopover}>{trigger}</div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 mt-2 w-48 bg-white border border-brand shadow-lg rounded-lg">
                        <div className="p-2.5">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
