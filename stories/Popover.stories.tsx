import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import {
    Input,
    Button,
    Label,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '../src';

const meta: Meta<typeof Popover> = {
    title: 'Components/Popover',
    component: Popover,
    tags: ['autodocs'],
};

export default meta;

export function Primary() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopover = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Popover>
            <PopoverTrigger onClick={togglePopover}>
                <Button type="button" variant="outline">
                    Open popover
                </Button>
            </PopoverTrigger>
            {isOpen && (
                <PopoverContent>
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">
                                Dimensions
                            </h4>
                            <p className="text-sm">
                                Set the dimensions for the layer.
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-3 items-center gap-1">
                                <Label htmlFor="width">Width</Label>
                                <Input
                                    type="text"
                                    id="width"
                                    defaultValue="100%"
                                    className="col-span-2 w-full"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-1">
                                <Label htmlFor="maxWidth">Max. width</Label>
                                <Input
                                    type="text"
                                    id="maxWidth"
                                    defaultValue="300px"
                                    className="col-span-2 w-full"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-1">
                                <Label htmlFor="height">Height</Label>
                                <Input
                                    type="text"
                                    id="height"
                                    defaultValue="25px"
                                    className="col-span-2 w-full"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-1">
                                <Label htmlFor="maxHeight">Max. height</Label>
                                <Input
                                    type="text"
                                    id="maxHeight"
                                    defaultValue="none"
                                    className="col-span-2 w-full"
                                />
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            )}
        </Popover>
    );
}
