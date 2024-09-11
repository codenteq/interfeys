import React from 'react';
import type { Meta } from '@storybook/react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionList,
} from '../src/';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
    tags: ['autodocs'],
};

export default meta;

export function Primary() {
    return (
        <>
            <AccordionList>
                <Accordion>
                    <AccordionHeader>Is it accessible?</AccordionHeader>
                    <AccordionBody>
                        {'Yes. It adheres to the WAI-ARIA design pattern.'}
                    </AccordionBody>
                </Accordion>
                <Accordion>
                    <AccordionHeader>Is it styled?</AccordionHeader>
                    <AccordionBody>
                        {
                            'Yes. It comes with default styles that matches the other components aesthetic.'
                        }
                    </AccordionBody>
                </Accordion>
                <Accordion>
                    <AccordionHeader>Is it animated?</AccordionHeader>
                    <AccordionBody>
                        {
                            "Yes. It's animated by default, but you can disable it if you prefer."
                        }
                    </AccordionBody>
                </Accordion>
            </AccordionList>
        </>
    );
}
