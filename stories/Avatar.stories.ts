import Avatar from '../src/avatar/Avatar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        fallback: 'CT',
    },
};

export const Secondary: Story = {
    args: {
        src: 'https://secure.gravatar.com/avatar/074329e344220ee665c78595257cd8c4?s=32&d=wavatar&f=y&r=g',
    },
};
