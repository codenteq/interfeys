'use client';

import React from 'react';

interface IAvatarProps {
    name?: string;
    letter: string | React.ReactNode;
    className?: string;
}

export default function Avatar({ name, letter, className }: IAvatarProps) {
    return (
        <div className={className}>
            <div className="inline-flex overflow-hidden relative justify-center items-center w-12 h-12 bg-zinc-200 rounded-full dark:bg-zinc-600">
                <span className="font-medium text-zinc-600 dark:text-zinc-300 select-none">
                    {letter}
                </span>
            </div>
            <span className="font-medium block text-lg my-2 select-all">
                {name}
            </span>
        </div>
    );
}
