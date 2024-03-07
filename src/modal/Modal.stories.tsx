import React, { useState } from 'react';
import Modal from "./Modal";
import type {Meta} from "@storybook/react";
import Button from "../button/Button";

const meta = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
        disableZoom: true,
        docs: {
            story: {
                inline: false,
                iframeHeight: 600,
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        isOpen: { control: 'boolean' },
        title: { control: 'text' },
        children: { control: 'text' },
    },
    args: {
        title: 'Terms And Conditions',
        children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
} satisfies Meta<typeof Modal>;

export default meta;

export function Primary({ ...args }) {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <Button onClick={openModal} label={'Open Modal'} type={"button"}/>
            {isOpen && (
                <Modal title={args.title} isOpen={isOpen} setIsOpen={setIsOpen}>
                    {args.children}
                </Modal>
            )}
        </>
    );

};
