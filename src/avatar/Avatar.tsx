import React from 'react';

interface IAvatarProps {
    className?: string;
    letter?: string;
    name?: string;
    src?: string;
}

export default function Avatar({ className, letter, name, src }: IAvatarProps) {
    return (
        <div className={className}>
            <div className="inline-flex overflow-hidden relative justify-center items-center w-12 h-12 bg-zinc-200 rounded-full dark:bg-zinc-600">
                {letter && !src && (
                    <span className="font-medium text-zinc-600 dark:text-zinc-300 select-none">
                        {letter}
                    </span>
                )}
                {src && !letter && (
                    <img src={src} className="select-none" alt="avatar" />
                )}
            </div>
            <span className="font-medium block text-lg my-2 select-all">
                {name}
            </span>
        </div>
    );
}
