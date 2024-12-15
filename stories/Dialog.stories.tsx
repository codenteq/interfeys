import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import {
    Button,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '../src';

const meta: Meta<typeof Dialog> = {
    title: 'Components/Dialog',
    component: Dialog,
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
        open: { control: 'boolean' },
    },
};

export default meta;

export function Primary() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)} variant="primary">
                Open Dialog
            </Button>
            {isOpen && (
                <Dialog>
                    <DialogContent onClose={() => setIsOpen(false)}>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will
                                permanently delete your account and remove your
                                data from our servers.
                            </DialogDescription>
                            <DialogFooter>
                                <Button type="button" className="w-full">
                                    Mark all as read
                                </Button>
                            </DialogFooter>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
}
