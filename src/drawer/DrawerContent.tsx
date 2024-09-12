import React from 'react';
import { motion } from 'framer-motion';

interface IDrawerContentProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export default function DrawerContent({
    className,
    children,
    ...props
}: IDrawerContentProps) {
    return (
        <motion.div>
            <div
                className={`${className} fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-white dark:bg-[#1c1c1c]`}
                {...props}>
                <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-[#e9f0ff] dark:bg-[#2b2b36]" />
                {children}
            </div>
        </motion.div>
    );
}
