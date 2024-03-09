import Radio from "../src/radio/Radio";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Components/Radio',
    component: Radio,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: { args: { type: string } } = {
    args: {
        type: 'radio'
    },
};
