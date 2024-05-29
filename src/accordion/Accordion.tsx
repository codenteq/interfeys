import React, { useState, ReactNode, createContext, useContext } from 'react';
import { motion } from 'framer-motion';

interface AccordionProps {
    children: ReactNode;
}

interface AccordionItemProps {
    children: ReactNode;
}

interface AccordionHeaderProps {
    children: ReactNode;
    className?: string;
}

interface AccordionBodyProps {
    children: ReactNode;
    className?: string;
}

const AccordionContext = createContext({
    isOpen: false,
    toggle: () => {},
});

export const AccordionList = ({ children }: AccordionProps) => {
    return <div>{children}</div>;
};

export const Accordion = ({ children }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <AccordionContext.Provider value={{ isOpen, toggle }}>
            <div className="border-b border-gray-200 dark:border-gray-700">
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

export const AccordionHeader = ({
    children,
    className,
}: AccordionHeaderProps) => {
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

export const AccordionBody = ({ children, className }: AccordionBodyProps) => {
    const { isOpen } = useContext(AccordionContext);
    return (
        <motion.div
            className={`${className} ${isOpen ? 'block' : 'hidden'}`}
            initial={{ height: 0 }}
            animate={{ height: isOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}>
            <div className={`py-5 ${isOpen ? 'block' : 'hidden'}`}>
                {children}
            </div>
        </motion.div>
    );
};

export default Accordion;
