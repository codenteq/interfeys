import React from 'react';
import OptGroup from '../src/optgroup/OptGroup';
import type { Meta } from '@storybook/react';

const meta = {
    title: 'Components/OptGroup',
    component: OptGroup,
    tags: ['autodocs'],
} satisfies Meta<typeof OptGroup>;

export default meta;

export function Primary() {
    return (
        <OptGroup label="Option Group" placeholder="Choose">
            <optgroup label="Fruits">
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
            </optgroup>
            <optgroup label="Vegetables">
                <option value="carrot">Carrot</option>
                <option value="broccoli">Broccoli</option>
            </optgroup>
        </OptGroup>
    );
}

export function SelectDisabled() {
    return (
        <OptGroup label="Option Group" placeholder="Choose" disabled={true}>
            <optgroup label="Fruits">
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
            </optgroup>
            <optgroup label="Vegetables">
                <option value="carrot">Carrot</option>
                <option value="broccoli">Broccoli</option>
            </optgroup>
        </OptGroup>
    );
}

export function OptGroupDisabled() {
    return (
        <OptGroup label="Option Group" placeholder="Choose">
            <optgroup label="Fruits">
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
            </optgroup>
            <optgroup label="Vegetables" disabled={true}>
                <option value="carrot">Carrot</option>
                <option value="broccoli">Broccoli</option>
            </optgroup>
        </OptGroup>
    );
}
