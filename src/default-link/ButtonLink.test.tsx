import React from 'react';

interface IDefaultLinkProps {
    name: string;
    href: string;
    className?: string;
}

export default function ButtonLink({ name, href, className}: IDefaultLinkProps) {
    return (
        <a href={href}>
            <div
                className={`${className} text-center dark:text-white text-zinc-900 border border-brand hover:bg-brand hover:text-white transition-all rounded-lg py-2 px-4`}>
                {name}
            </div>
        </a>
    );
}

export const WithInitials = () => <ButtonLink name="Primart Button" href="/" />;
export const WithName = () => <ButtonLink name="Primart Button" href="/"/>;
export const WithCustomClass = () => <ButtonLink name="Primart Button" href="/" className="custom-class" />;
