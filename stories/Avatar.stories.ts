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

export const Secondary: Story = {
    args: {
        name: 'Avatar',
        src: 'https://secure.gravatar.com/avatar/074329e344220ee665c78595257cd8c4?s=64&f=y&r=g',
    },
};
