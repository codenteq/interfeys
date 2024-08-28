import React from 'react';
import Select from '../src/select/Select';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
};

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

export function OptGroup() {
    return (
        <Select label="Option Group" placeholder="Choose">
            <optgroup label="Fruits">
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
            </optgroup>
            <optgroup label="Vegetables">
                <option value="carrot">Carrot</option>
                <option value="broccoli">Broccoli</option>
            </optgroup>
        </Select>
    );
}

export function OptGroupDisabled() {
    return (
        <Select label="Option Group" placeholder="Choose">
            <optgroup label="Fruits">
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
            </optgroup>
            <optgroup label="Vegetables" disabled={true}>
                <option value="carrot">Carrot</option>
                <option value="broccoli">Broccoli</option>
            </optgroup>
        </Select>
    );
}