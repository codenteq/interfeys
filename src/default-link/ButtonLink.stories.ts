import Button from "./ButtonLink";
import type {Meta, StoryObj} from "@storybook/react";
import ButtonLink from "./ButtonLink";

const meta = {
    title: 'Components/Button Link',
    component: ButtonLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        name: 'Primary Button',
        href: '#'
    },
};
