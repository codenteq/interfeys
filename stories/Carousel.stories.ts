import Carousel from '../src/carousel/Carousel';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Carousel',
    component: Carousel,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        images: [
            'https://images.unsplash.com/photo-1606228281437-dc226988dc3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1584009577996-0227b2358356?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        width: 520,
        height: 180,
    },
};
