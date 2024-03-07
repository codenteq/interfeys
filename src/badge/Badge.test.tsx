import React from 'react';

interface IBadgeProps {
    className?: string;
    name: string;
}
export default function Badge({ className, name }: IBadgeProps) {
    return (
        <span
            className={`${className} bg-brand text-white px-2.5 py-0.5 rounded uppercase`}>
      {name}
    </span>
    );
}

export const DefaultBadge = () => <Badge name="New" />;
export const WithCustomClass = () => <Badge name="Special" className="custom-class" />;
export const DifferentColorBadge = () => (
    <Badge name="Info" className="bg-blue-500 text-white" />
);
