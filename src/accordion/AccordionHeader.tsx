import React, { useContext, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AccordionContext } from './Accordion';

interface AccordionHeaderProps {
    children: ReactNode;
    className?: string;
}

const AccordionHeader = ({
    children,
    className,
    ...props
}: AccordionHeaderProps) => {
    const { isOpen, toggle } = useContext(AccordionContext);
    return (
        <motion.button
            className={`flex flex-1 items-center justify-between py-4 w-full font-medium transition-all hover:underline ${className}`}
            onClick={toggle}
            {...props}>
            {children}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
            </svg>
        </motion.button>
    );
};

export default AccordionHeader;
