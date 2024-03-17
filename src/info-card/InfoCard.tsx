import React from 'react';

interface IInfoCardProps {
    className?: string;
    children: React.ReactNode;
}

export default function InfoCard({ className, children }: IInfoCardProps) {
    return (
        <>
            <div
                className={`${className} rounded-lg`}>
                {children}
            </div>
        </>
    );
}
