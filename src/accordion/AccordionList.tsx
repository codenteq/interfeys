import React, { ReactNode } from 'react';

interface AccordionProps {
    children: ReactNode;
}

const AccordionList = ({ children }: AccordionProps) => {
    return <div>{children}</div>;
};

export default AccordionList;
