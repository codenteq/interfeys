import React from 'react';
import {
    AccordionBody,
    AccordionHeader,
    Accordion,
    AccordionList,
} from '../src/accordion/Accordion';
import type { Meta } from '@storybook/react';

const meta = {
    title: 'Components/Accordion',
    component: Accordion,
    tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;

export function Primary() {
    return (
        <>
            <AccordionList>
                <Accordion>
                    <AccordionHeader className="text-lg font-medium text-left text-gray-900 dark:text-gray-100">
                        Toggle me!
                    </AccordionHeader>
                    <AccordionBody className="text-gray-700 dark:text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Adipisci architecto debitis earum fuga iusto modi
                        molestias necessitatibus provident quam! Nisi!
                    </AccordionBody>
                </Accordion>
            </AccordionList>
        </>
    );
}
