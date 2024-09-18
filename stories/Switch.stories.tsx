import type { Meta } from '@storybook/react';
import React from 'react';
import { Button, Label, Switch } from '../src';

const meta: Meta<typeof Switch> = {
    title: 'Components/Switch',
    component: Switch,
    tags: ['autodocs'],
};

export default meta;

export function Primary() {
    return (
        <div className="flex items-center space-x-2 gap-1">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
    );
}

export function SwitchForm() {
    return (
        <form className="w-full space-y-6">
            <div>
                <h3 className="mb-4 text-lg font-medium">
                    Email Notifications
                </h3>
                <div className="space-y-4">
                    <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="flex flex-col gap-2 space-y-0.5">
                            <Label className="text-base">
                                Marketing emails
                            </Label>
                            <Label
                                style={{ color: '#6e7781', fontWeight: '400' }}>
                                Receive emails about new products, features, and
                                more.
                            </Label>
                        </div>
                        <div>
                            <Switch />
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="flex flex-col gap-2 space-y-0.5">
                            <Label className="text-base">Security emails</Label>
                            <Label
                                style={{ color: '#6e7781', fontWeight: '400' }}>
                                Receive emails about your account security.
                            </Label>
                        </div>
                        <div>
                            <Switch disabled aria-readonly />
                        </div>
                    </div>
                </div>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
}
