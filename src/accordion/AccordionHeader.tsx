import React, { useContext, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AccordionContext } from './Accordion';

interface AccordionHeaderProps {
    children: ReactNode;
    className?: string;
}

const AccordionHeader = ({ children, className }: AccordionHeaderProps) => {
    const { isOpen, toggle } = useContext(AccordionContext);
    return (
        <div className="border-b border-gray-200 dark:border-gray-700">
            <motion.button
                type="button"
                className={`flex items-center justify-between w-full py-5 ${className}`}
                onClick={toggle}>
                {children}
                <svg
                    className={`w-3 h-3 transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5L5 1 1 5"
                    />
                </svg>
            </motion.button>
        </div>
    );
};

export default AccordionHeader;
