import Card from '../src/card/Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        actions: ['Primary Button', 'Secondary Button'],
    },
};
