import React, { useState, ReactNode, createContext } from 'react';

interface AccordionItemProps {
    children: ReactNode;
}

const AccordionContext = createContext({
    isOpen: false,
    toggle: () => {},
});

const Accordion = ({ children }: AccordionItemProps) => {
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

export { AccordionContext };
export default Accordion;
