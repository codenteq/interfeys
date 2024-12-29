import type { Meta } from '@storybook/react';
import React from 'react';
import {
    Button,
    CommandShortcut,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../src';

const meta: Meta<typeof DropdownMenu> = {
    title: 'Components/Dropdown Menu',
    component: DropdownMenu,
};

export default meta;

export function Primary() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="primary">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Profile
                    <CommandShortcut>⇧⌘P</CommandShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Billing
                    <CommandShortcut>⌘B</CommandShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Settings
                    <CommandShortcut>⌘S</CommandShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Keyboard shortcuts
                    <CommandShortcut>⌘K</CommandShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                    <CommandShortcut>⇧⌘Q</CommandShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
