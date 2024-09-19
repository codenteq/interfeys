import type { Meta } from '@storybook/react';
import React from 'react';
import { Button, Input, Label } from '../src';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

export function Primary() {
    return <Input type="email" placeholder="Email" />;
}

export function InputFile() {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
        </div>
    );
}

export function InputDisabled() {
    return <Input disabled type="email" placeholder="Email" />;
}

export function InputWithLabel() {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
        </div>
    );
}

export function InputWithButton() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2 gap-1">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
        </div>
    );
}

export function InputForm() {
    return (
        <form className="w-2/3 space-y-6">
            <div>
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" placeholder="interfeys" />
                <Label style={{ color: '#1c1c1c', fontWeight: '400' }}>
                    This is your public display name.
                </Label>
            </div>

            <Button type="submit">Submit</Button>
        </form>
    );
}
