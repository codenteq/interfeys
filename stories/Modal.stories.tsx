import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import { Label, Input, Modal, Button } from '../src';

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
            <Button onClick={() => setIsOpen(true)} variant="primary">
                Open Modal
            </Button>
            {isOpen && (
                <Modal
                    title="Edit profile"
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}>
                    <Label>
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
                                defaultValue="codenteq@codenteq.com"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                type="text"
                                id="username"
                                defaultValue="@codenteq"
                            />
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button>Save changes</Button>
                            <Button variant="destructive">Cancel</Button>
                        </div>
                    </form>
                </Modal>
            )}
        </>
    );
}
