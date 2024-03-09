import Textarea from "../src/textarea/Textarea";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Components/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: { args: { placeholder: string } } = {
    args: {
        placeholder: 'Textarea'
    },
};
