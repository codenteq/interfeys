import React, { useState } from 'react';
import Dialog from '../src/dialog/Dialog';
import type { Meta } from '@storybook/react';
import Button from '../src/button/Button';
import DialogContent from '../src/dialog/DialogContent';
import DialogHeader from '../src/dialog/DialogHeader';
import DialogTitle from '../src/dialog/DialogTitle';
import DialogDescription from '../src/dialog/DialogDescription';
import DialogFooter from '../src/dialog/DialogFooter';

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
            <Button onClick={() => setIsOpen(true)} type={'button'}>
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
