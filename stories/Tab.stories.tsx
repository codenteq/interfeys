import React from 'react';
import type { Meta } from '@storybook/react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '../src';

const meta = {
    title: 'Components/Tab',
    component: TabGroup,
    tags: ['autodocs'],
} satisfies Meta<typeof TabGroup>;

export default meta;

export function Primary() {
    return (
        <TabGroup>
            <TabList>
                <Tab>Üyelik bilgilerim</Tab>
                <Tab>Şifre değişikliği</Tab>
                <Tab>İletişim tercihlerim</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                </TabPanel>
                <TabPanel>
                    Diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </TabPanel>
                <TabPanel>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                </TabPanel>
            </TabPanels>
        </TabGroup>
    );
}