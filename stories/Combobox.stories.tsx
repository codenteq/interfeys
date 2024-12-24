import React from 'react';
import type { Meta } from '@storybook/react';
import {
    Button,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '../src';

const meta: Meta = {
    title: 'Components/Combobox',
};

export default meta;

type LanguageOption = {
    value: string;
    label: string;
};

const languages: LanguageOption[] = [
    { label: 'Türkçe', value: 'tr' },
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Spanish', value: 'es' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Russian', value: 'ru' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Korean', value: 'ko' },
    { label: 'Chinese', value: 'zh' },
];

export function Primary() {
    const [isOpen, setIsOpen] = React.useState(false);
    const togglePopover = () => {
        setIsOpen(!isOpen);
    };
    const [value, setValue] = React.useState('');

    return (
        <Popover>
            <PopoverTrigger onClick={togglePopover}>
                <Button
                    size="lg"
                    variant="primary"
                    role="combobox"
                    aria-expanded={isOpen}
                    className="flex items-center gap-1 justify-between">
                    {value
                        ? languages.find(
                              (language: LanguageOption) =>
                                  language.value === value,
                          )?.label
                        : 'Select language...'}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="ml-2 h-5 w-5 shrink-0 opacity-50">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                    </svg>
                </Button>
            </PopoverTrigger>
            {isOpen && (
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search language..." />
                        <CommandList>
                            <CommandEmpty>No language found.</CommandEmpty>
                            <CommandGroup>
                                {languages.map(language => (
                                    <CommandItem
                                        key={language.value}
                                        value={language.value}
                                        onSelect={currentValue => {
                                            setValue(
                                                currentValue === value
                                                    ? ''
                                                    : currentValue,
                                            );
                                            setIsOpen(false);
                                        }}>
                                        {language.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            )}
        </Popover>
    );
}
