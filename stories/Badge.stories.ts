import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../src';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Badge',
        variant: 'default',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Badge',
        variant: 'secondary',
    },
};

export const Destructive: Story = {
    args: {
        children: 'Badge',
        variant: 'destructive',
    },
};

export const Outline: Story = {
    args: {
        children: 'Badge',
        variant: 'outline',
    },
};
