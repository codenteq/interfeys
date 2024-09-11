import type { Meta } from '@storybook/react';
import React from 'react';
import { Checkbox, Label } from '../src';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
};

export default meta;
export function Primary() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    WebkitJustifyContent: 'center',
                    gap: '0.5rem',
                }}>
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
        </>
    );
}
