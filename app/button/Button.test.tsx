import React from 'react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['button', 'submit', 'reset'],
        },
        disabled: { control: { type: 'boolean' } },
        isLoading: { control: { type: 'boolean' } },
        loader: { control: { type: 'text' } },
        label: { control: { type: 'text' } },
    },
};

const PrimaryButton = () => (
    <Button type="button" label={'Primary Button'} />
);

const DisabledButton = () => (
    <Button type="button" label={'Disabled Button'} disabled/>
);

export const Primary = PrimaryButton;
export const Disabled = DisabledButton;
