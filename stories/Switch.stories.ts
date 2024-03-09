import Switch from "../src/switch/Switch";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: { args: { type: string } } = {
    args: {
        type: "checkbox"
    },
};
