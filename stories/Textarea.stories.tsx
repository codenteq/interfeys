import type { Meta } from '@storybook/react';
import React from 'react';
import { Button, Label, Textarea } from '../src';

const meta: Meta<typeof Textarea> = {
    title: 'Components/Textarea',
    component: Textarea,
    tags: ['autodocs'],
};

export default meta;

export function Primary() {
    return <Textarea placeholder="Type your message here." />;
}

export function TextareaDisabled() {
    return <Textarea placeholder="Type your message here." disabled />;
}

export function TextareaWithLabel() {
    return (
        <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" />
        </div>
    );
}

export function TextareaWithText() {
    return (
        <div className="grid w-full gap-1.5">
            <Label
                style={{ color: '#6e7781', fontWeight: '400' }}
                htmlFor="message-2">
                Your Message
            </Label>
            <Textarea placeholder="Type your message here." id="message-2" />
            <Label style={{ color: '#6e7781', fontWeight: '400' }}>
                Your message will be copied to the support team.
            </Label>
        </div>
    );
}

export function TextareaWithButton() {
    return (
        <div className="grid w-full gap-2">
            <Textarea placeholder="Type your message here." />
            <Button>Send message</Button>
        </div>
    );
}

export function TextareaForm() {
    return (
        <form className="w-2/3 space-y-6">
            <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none"
                />
                <Label style={{ color: '#6e7781', fontWeight: '400' }}>
                    You can <span>@codenteq</span> other users and
                    organizations.
                </Label>
            </div>

            <Button type="submit">Submit</Button>
        </form>
    );
}
