import React, { useContext, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AccordionContext } from './Accordion';

interface AccordionBodyProps {
    children: ReactNode;
    className?: string;
}

const AccordionBody = ({ children, className }: AccordionBodyProps) => {
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

export default AccordionBody;
