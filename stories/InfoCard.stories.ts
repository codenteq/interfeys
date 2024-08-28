import InfoCard from '../src/info-card/InfoCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InfoCard> = {
    title: 'Components/Info Card',
    component: InfoCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} ;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        className: 'max-w-sm p-6 bg-zinc-50 dark:bg-zinc-950',
    },
};
