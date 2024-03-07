import Card from "./Card";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        link: {
            name: 'Link',
            href: '#'
        }
    },
};
