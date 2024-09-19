import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import '../src/globals.css';

const preview: Preview = {
    parameters: {
        darkMode: {
            classTarget: 'body',
            darkClass: 'dark',
            lightClass: 'light',
            stylePreview: true,
            dark: themes.dark,
            light: themes.light,
        },
        docs: {
            theme: themes.dark,
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        viewMode: 'docs',
        options: {
            storySort: {
                method: 'react',
                order: ['Get Started', ['Introduction', 'Installation']],
                locales: 'en-US',
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
