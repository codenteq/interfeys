'use client';

import React, { ReactNode, useState } from 'react';

interface ICardProps {
    className?: string;
    link?: {
        href: string;
        name: string;
    };
    button?: {
        onClick: () => void;
        name: string;
    };
    children: React.ReactNode;
}

export default function Card({
    className,
    link,
    button,
    children,
}: ICardProps): ReactNode {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div
                className={`${className} w-full h-fit rounded-lg border border-zinc-200 text-zinc-900 bg-white dark:border-zinc-800 dark:text-white hover:bg-zinc-100 dark:bg-black dark:hover:bg-zinc-900`}>
                <div className="p-5">
                    <div className="relative">
                        <div>
                            <div
                                className="cursor-pointer"
                                onClick={toggleMenu}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-three-dots w-5 h-5 dark:text-white"
                                    viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>
                            </div>
                            {isOpen && (
                                <div className="relative">
                                    <ul className="absolute rounded-lg shadow-md backdrop-blur-lg bg-black/20 dark:bg-white/10">
                                        <li>
                                            {link && (
                                                <a href={link?.href}>
                                                    <div className="mr-2 px-4 py-2 text-zinc-900 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-500 cursor-pointer">
                                                        {link?.name}
                                                    </div>
                                                </a>
                                            )}
                                        </li>
                                        <li>
                                            {button && (
                                                <button
                                                    onClick={button.onClick}
                                                    className="px-4 py-2 text-zinc-900 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-500">
                                                    {button.name}
                                                </button>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        </>
    );
}
