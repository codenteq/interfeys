import OptGroup from '../src/optgroup/OptGroup';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/OptGroup',
    component: OptGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof OptGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        groups: [
            {
                label: 'Fruits',
                options: [
                    { value: 'apple', label: 'Apple' },
                    { value: 'banana', label: 'Banana' },
                ],
            },
            {
                label: 'Vegetables',
                options: [
                    { value: 'carrot', label: 'Carrot' },
                    { value: 'broccoli', label: 'Broccoli' },
                ],
                disabled: true,
            },
        ],
        placeholder: 'Choose',
    },
};
