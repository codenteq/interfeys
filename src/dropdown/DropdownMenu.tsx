import * as React from 'react';

const DropdownMenu = ({ children }: { children: React.ReactNode[] }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="relative">
            <div onClick={() => setIsOpen(!isOpen)}>{children[0]}</div>
            {isOpen && <div className="absolute z-50">{children[1]}</div>}
        </div>
    );
};

export default DropdownMenu;
