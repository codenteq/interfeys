import type { Meta } from '@storybook/react';
import React from 'react';
import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle, Label, Select, Switch, Input,
} from '../src';
import CardHeader from '../src/card/CardHeader';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
};

export default meta;
export function Primary() {
    return (
        <Card style={{ width: '350px', margin: 'auto' }}>
            <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">Framework</Label>
                            <Select id="framework">
                                <option value="next">Next.js</option>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
    );
}

export function Secondary() {
    const notifications = [
        {
            title: 'Your call has been confirmed.',
            description: '1 hour ago',
        },
        {
            title: 'You have a new message!',
            description: '1 hour ago',
        },
        {
            title: 'Your subscription is expiring soon!',
            description: '2 hours ago',
        },
    ];

    return (
        <>
            <Card style={{ width: '380px', margin: 'auto' }}>
                <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>
                        You have 3 unread messages.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="flex items-center gap-4 rounded-md border p-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                            />
                        </svg>

                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                                Push Notifications
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Send notifications to device.
                            </p>
                        </div>
                        <Switch />
                    </div>
                    <div>
                        {notifications.map((notification, index) => (
                            <div
                                key={index}
                                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {notification.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {notification.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="flex items-center justify-center gap-2 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Mark all as read
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
}
