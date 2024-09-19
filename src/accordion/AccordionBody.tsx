import React, { useContext, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AccordionContext } from './Accordion';

interface AccordionBodyProps {
    children: ReactNode;
    className?: string;
}

const AccordionBody = ({
    children,
    className,
    ...props
}: AccordionBodyProps) => {
    const { isOpen } = useContext(AccordionContext);

    return (
        <motion.div
            className={className}
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
            {...props}>
            <div className="pb-4 pt-0 text-sm text-[#0d0d26] dark:text-[#f2f7ff] transition-all">
                {children}
            </div>
        </motion.div>
    );
};

export default AccordionBody;
