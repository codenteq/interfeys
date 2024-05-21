import React, { useState } from 'react';
import Drawer from '../src/drawer/Drawer';
import type { Meta } from '@storybook/react';
import Button from '../src/button/Button';

const meta = {
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
        isOpen: { control: 'boolean' },
    },
} satisfies Meta<typeof Drawer>;

export default meta;

export function Primary() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <Button
                onClick={toggleDrawer}
                label={'Open Dialog'}
                type={'button'}
            />
            <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
                <h1>Drawer</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </Drawer>
        </>
    );
}
