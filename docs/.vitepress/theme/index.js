import DefaultTheme from 'vitepress/theme';
import CodePreview from './components/CodePreview.vue';
import ColorBlocks from './components/ColorBlocks.vue';

import './css/theme.css';

export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('CodePreview', CodePreview);
        app.component('ColorBlocks', ColorBlocks);
    },
};
