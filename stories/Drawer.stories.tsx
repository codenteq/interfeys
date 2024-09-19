import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import Button from '../src/button/Button';
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
} from '../src';
import DrawerTitle from '../src/drawer/DrawerTitle';

const meta: Meta<typeof Drawer> = {
    title: 'Components/Drawer',
    component: Drawer,
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
                Open Drawer
            </Button>
            {isOpen && (
                <Drawer>
                    <DrawerContent onClose={() => setIsOpen(false)}>
                        <DrawerHeader>
                            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                            <DrawerDescription>
                                This action cannot be undone.
                            </DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                            <Button type="submit">Submit</Button>
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            )}
        </>
    );
}
