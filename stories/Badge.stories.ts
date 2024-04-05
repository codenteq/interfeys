import Badge from '../src/badge/Badge';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: 'bg-blue-100 text-blue-800 text-xs',
        children: 'DEFAULT',
    },
};

export const Dark: Story = {
    args: {
        className: 'bg-zinc-100 text-zinc-800 text-xs',
        children: 'DARK',
    },
};

export const Red: Story = {
    args: {
        className: 'bg-red-100 text-red-800 text-xs',
        children: 'RED',
    },
};

export const Green: Story = {
    args: {
        className: 'bg-green-100 text-green-800 text-xs',
        children: 'GREEN',
    },
};

export const Yellow: Story = {
    args: {
        className: 'bg-yellow-100 text-yellow-800 text-xs',
        children: 'YELLOW',
    },
};

export const Indigo: Story = {
    args: {
        className: 'bg-indigo-100 text-indigo-800 text-xs',
        children: 'INDIGO',
    },
};

export const Purple: Story = {
    args: {
        className: 'bg-purple-100 text-purple-800 text-xs',
        children: 'PURPLE',
    },
};

export const Pink: Story = {
    args: {
        className: 'bg-pink-100 text-pink-800 text-xs',
        children: 'PINK',
    },
};
