import Popover from '../src/popover/Popover';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Popover',
    component: Popover,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Great!!!',
        trigger: 'Click me',
    },
};
