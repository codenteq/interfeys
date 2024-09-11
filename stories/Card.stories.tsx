import type { Meta } from '@storybook/react';
import React from 'react';
import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from '../src';
import CardHeader from '../src/card/CardHeader';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
};

export default meta;
export function Primary() {
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
                <CardContent>
                    <div>
                        {notifications.map((notification, index) => (
                            <div key={index} className="mb-4 pb-4">
                                <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {notification.title}
                                    </p>
                                    <p className="text-sm">
                                        {notification.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="button" className="w-full">
                        Mark all as read
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
}
