import React from 'react';

interface IInfoCardProps {
    className?: string;
    children: React.ReactNode;
}

export default function InfoCard({ className, children }: IInfoCardProps) {
    return (
        <>
            <div
                className={`${className} max-w-sm p-6 bg-zinc-50 rounded-lg dark:bg-zinc-950`}>
                {children}
            </div>
        </>
    );
}
