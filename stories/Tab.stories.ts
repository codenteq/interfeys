import Tab from "../src/tab-group/Tab";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Components/Tab Group',
    component: Tab,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: { args: { children: string[]; tabs: string[] } } = {
    args: {
        tabs: ['Tab 1', 'Tab 2'],
        children: ['Tab content 1', 'Tab content 2']
    },
};
