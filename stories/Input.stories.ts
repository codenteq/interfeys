import Input from "../src/input/Input";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: { args: { placeholder: string; type: string } } = {
    args: {
        type: "text",
        placeholder: "Text Input"
    },
};

export const EmailInput: { args: { placeholder: string; type: string } } = {
    args: {
        type: "email",
        placeholder: "Email Input"
    },
};

export const DateInput: { args: { type: string } } = {
    args: {
        type: "date",
    },
};

export const TimeInput: { args: { type: string } } = {
    args: {
        type: "time",
    },
};

export const DatetimeLocalInput: { args: { type: string } } = {
    args: {
        type: "datetime-local",
    },
};

export const MonthInput: { args: { type: string } } = {
    args: {
        type: "month",
    },
};

export const WeekInput: Story = {
    args: {
        type: "week",
    },
};

export const PasswordInput: { args: { placeholder: string; type: string } } = {
    args: {
        type: "password",
        placeholder: "Password Input"
    },
};

export const NumberInput: { args: { placeholder: string; type: string } } = {
    args: {
        type: "number",
        placeholder: "Number Input"
    },
};

export const TelInput: { args: { pattern: string; placeholder: string; type: string } } = {
    args: {
        type: "tel",
        placeholder: "Tel Input",
        pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}"
    },
};

export const UrlInput: { args: { placeholder: string; type: string } } = {
    args: {
        type: "url",
        placeholder: "URL Input"
    },
};

export const FileInput: { args: { type: string } } = {
    args: {
        type: "file",
    },
};

export const Search: { args: { placeholder: string; type: string } } = {
    args: {
        type: "search",
        placeholder: "Search"
    },
};

export const Checkbox: { args: { type: string } } = {
    args: {
        type: "checkbox",
    },
};

export const RangeInput: { args: { type: string } } = {
    args: {
        type: "range",
    },
};
