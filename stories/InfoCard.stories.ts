import InfoCard from '../src/info-card/InfoCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Info Card',
    component: InfoCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
};
