import Input from '../src/input/Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
    args: {
        type: 'text',
        placeholder: 'Text Input',
    },
};

export const EmailInput: Story = {
    args: {
        type: 'email',
        placeholder: 'Email Input',
    },
};

export const DateInput: Story = {
    args: {
        type: 'date',
    },
};

export const TimeInput: Story = {
    args: {
        type: 'time',
    },
};

export const DatetimeLocalInput: Story = {
    args: {
        type: 'datetime-local',
    },
};

export const MonthInput: Story = {
    args: {
        type: 'month',
    },
};

export const WeekInput: Story = {
    args: {
        type: 'week',
    },
};

export const PasswordInput: Story = {
    args: {
        type: 'password',
        placeholder: 'Password Input',
    },
};

export const NumberInput: Story = {
    args: {
        type: 'number',
        placeholder: 'Number Input',
    },
};

export const TelInput: Story = {
    args: {
        type: 'tel',
        placeholder: 'Tel Input',
        pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
    },
};

export const UrlInput: Story = {
    args: {
        type: 'url',
        placeholder: 'URL Input',
    },
};

export const FileInput: Story = {
    args: {
        type: 'file',
    },
};

export const Search: Story = {
    args: {
        type: 'search',
        placeholder: 'Search',
    },
};
export const HiddenInput: Story = {
    args: {
        type: 'hidden',
    },
};
