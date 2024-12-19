import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../src';

const meta: Meta<typeof Label> = {
    title: 'Components/Label',
    component: Label,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Primary Text',
    },
};
