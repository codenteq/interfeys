import type { Meta } from '@storybook/react';
import React from 'react';
import { Button } from '../src';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

export function Primary() {
    return <Button>Button</Button>;
}

export function ButtonSecondary() {
    return <Button variant="secondary">Secondary</Button>;
}

export function ButtonDestructive() {
    return <Button variant="destructive">Destructive</Button>;
}

export function ButtonOutline() {
    return <Button variant="outline">Outline</Button>;
}

export function ButtonGhost() {
    return <Button variant="ghost">Ghost</Button>;
}

export function ButtonLink() {
    return <Button variant="link">Link</Button>;
}

export function ButtonIcon() {
    return (
        <Button variant="outline" size="icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
            </svg>
        </Button>
    );
}

export function ButtonWithIcon() {
    return (
        <Button className="flex items-center gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mr-2 h-5 w-5">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
            </svg>
            Login with Email
        </Button>
    );
}

export function ButtonLoading() {
    return (
        <Button isLoading={true} loader="Please wait" disabled>
            Please wait
        </Button>
    );
}
