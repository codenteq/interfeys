import React from 'react';

interface IAvatarProps {
    className?: string;
    fallback?: string;
    name?: string;
    src?: string;
}

export default function Avatar({
    className,
    fallback,
    name,
    src,
}: IAvatarProps) {
    return (
        <div className={className}>
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                {fallback && !src && (
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-[#e9f0ff] text-[#6e7781] dark:bg-[#2b2b36] dark:text-[#8b99a6]">
                        {fallback}
                    </span>
                )}
                {src && !fallback && (
                    <img
                        src={src}
                        className="aspect-square h-full w-full"
                        alt="avatar"
                    />
                )}
            </div>
            <span className="font-medium block my-2">{name}</span>
        </div>
    );
}
