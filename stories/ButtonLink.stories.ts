import Button from "../src/default-link/ButtonLink";
import type {Meta, StoryObj} from "@storybook/react";
import ButtonLink from "../src/default-link/ButtonLink";

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

export const Primary: { args: { name: string; href: string } } = {
    args: {
        name: 'Primary Button',
        href: '#'
    },
};
