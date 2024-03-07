import Badge from "./Badge";
import type {Meta, StoryObj} from "@storybook/react";

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

export const Primary: Story = {
    args: {
        name: "BADGE"
    },
};
