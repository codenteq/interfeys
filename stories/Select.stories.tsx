import React from 'react';
import Select from '../src/select/Select';
import type { Meta } from '@storybook/react';

const meta = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

export function Primary() {
    return (
        <Select label="Select" placeholder="Choose">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
        </Select>
    );
}

export function Disabled() {
    return (
        <Select label="Select" placeholder="Choose" disabled={true}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
        </Select>
    );
}
