import React from 'react';

interface IInfoCardProps {
    className?: string;
    children: React.ReactNode;
}

export default function InfoCard({ className, children }: IInfoCardProps) {
    return (
        <>
            <div
                className={`${className} bg-white dark:bg-black rounded-lg`}>
                {children}
            </div>
        </>
    );
}
