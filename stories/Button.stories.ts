import Button from '../src/button/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Button',
        type: 'button',
        variant: 'default',
    },
};

export const Destructive: Story = {
    args: {
        children: 'Button',
        type: 'button',
        variant: 'destructive',
    },
};

export const Outline: Story = {
    args: {
        children: 'Button',
        type: 'button',
        variant: 'outline',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Button',
        type: 'button',
        variant: 'secondary',
    },
};

export const Ghost: Story = {
    args: {
        children: 'Button',
        type: 'button',
        variant: 'ghost',
    },
};

export const Link: Story = {
    args: {
        children: 'Button',
        type: 'button',
        variant: 'link',
    },
};
