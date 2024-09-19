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
            <div className="border-b border-[#e9f0ff] dark:border-[#8b99a6]">
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

export { AccordionContext };
export default Accordion;
