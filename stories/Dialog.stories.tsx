import React, { useState } from 'react';
import Dialog from '../src/dialog/Dialog';
import type { Meta } from '@storybook/react';
import Button from '../src/button/Button';

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
        isOpen: { control: 'boolean' },
    },
};

export default meta;

export function Primary() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                label={'Open Dialog'}
                type={'button'}
            />
            {isOpen && (
                <Dialog isOpen={isOpen} setIsOpen={setIsOpen}>
                    <h3 className="mb-5">
                        Are you sure you want to delete this product?
                    </h3>
                    <Button type={'button'} label={"Yes, I'm sure"} />
                </Dialog>
            )}
        </>
    );
}
