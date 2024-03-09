import Avatar from '../src/avatar/Avatar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        name: 'Avatar',
        letter: 'A',
    },
};
