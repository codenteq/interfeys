import * as React from 'react';

interface ICardDescriptionProps extends React.HTMLProps<HTMLParagraphElement> {
    className?: string;
    children: React.ReactNode;
}

export default function CardDescription({
    className,
    children,
    ...prop
}: ICardDescriptionProps) {
    return (
        <p
            className={`${className} text-sm text-[#6e7781] dark:text-[#8b99a6]`}
            {...prop}>
            {children}
        </p>
    );
}
