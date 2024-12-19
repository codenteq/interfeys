import React from 'react';
import type { Meta } from '@storybook/react';
import {
    Input,
    Button,
    Card,
    CardHeader,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
    Label,
    TabsTrigger,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from '../src';

const meta: Meta<typeof TabGroup> = {
    title: 'Components/Tab',
    component: TabGroup,
    tags: ['autodocs'],
};

export default meta;

export function Primary() {
    return (
        <div style={{ width: '400px', margin: 'auto' }}>
            <TabGroup>
                <TabList className="w-full">
                    <TabsTrigger className="w-full">Account</TabsTrigger>
                    <TabsTrigger className="w-full">Password</TabsTrigger>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Card>
                            <CardHeader>
                                <CardTitle>Account</CardTitle>
                                <CardDescription>
                                    {
                                        "Make changes to your account here. Click save when you're done."
                                    }
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        defaultValue="Pedro Duarte"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        type="text"
                                        id="username"
                                        defaultValue="@peduarte"
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button type="button">Save changes</Button>
                            </CardFooter>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card>
                            <CardHeader>
                                <CardTitle>Password</CardTitle>
                                <CardDescription>
                                    {
                                        "Change your password here. After saving, you'll be logged out."
                                    }
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">
                                        Current password
                                    </Label>
                                    <Input id="current" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="new">New password</Label>
                                    <Input id="new" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button type="button">Save password</Button>
                            </CardFooter>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    );
}
