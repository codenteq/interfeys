import Label from '../src/label/Label';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Label',
    component: Label,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Primary Text',
    },
};
