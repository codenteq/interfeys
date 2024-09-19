import React, { useState } from 'react';
import Modal from '../src/modal/Modal';
import type { Meta } from '@storybook/react';
import Button from '../src/button/Button';
import { Label, Input } from '../src';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        disableZoom: true,
        docs: {
            story: {
                inline: false,
                iframeHeight: 600,
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        isOpen: { control: 'boolean' },
        title: { control: 'text' },
        children: { control: 'text' },
    },
};

export default meta;

export function Primary() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            {isOpen && (
                <Modal
                    title="Edit profile"
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}>
                    <Label style={{ color: '#1c1c1c', fontWeight: '400' }}>
                        {
                            "Make changes to your profile here. Click save when you're done."
                        }
                    </Label>
                    <form className="grid items-start gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                className="w-full"
                                defaultValue="codenteq@example.com"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                type="text"
                                id="username"
                                className="w-full"
                                defaultValue="@codenteq"
                            />
                        </div>
                        <Button type="submit">Save changes</Button>
                    </form>
                </Modal>
            )}
        </>
    );
}
