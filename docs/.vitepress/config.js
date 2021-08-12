const path = require('path')

module.exports = {
    lang: 'en-AU',
    title: 'S.UI',

    themeConfig: {
        repo: 'sgroupdesign/sui-vue',
        docsDir: 'docs',

        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',

        algolia: {
            appId: 'PG23BBBPPY',
            apiKey: '7180a794e2b24f10abe0d881ce415260',
            indexName: 'sui',
        },

        sidebar: {
            '/': [
                {
                    text: 'Getting Started',
                    children: [
                        { text: 'Introduction', link: '/' },
                        { text: 'Installation', link: '/getting-started/installation' },
                        { text: 'Installation (Docs)', link: '/getting-started/installation-docs' },
                    ],
                },
                {
                    text: 'CSS Framework',
                    children: [
                        { text: 'Accessibility', link: '/framework/accessibility' },
                        { text: 'Aspect Ratio', link: '/framework/aspect-ratio' },
                        { text: 'Colours', link: '/framework/colours' },
                        { 
                            text: 'Components',
                            children: [
                                { text: 'Alerts', link: '/framework/components/alerts' },
                                { text: 'Breadcrumb', link: '/framework/components/breadcrumb' },
                                { text: 'Buttons', link: '/framework/components/buttons' },
                                { text: 'Forms', link: '/framework/components/forms' },
                                { text: 'Headings', link: '/framework/components/headings' },
                                { text: 'Horizontal Rule', link: '/framework/components/hr' },
                                { text: 'Icons', link: '/framework/components/icons' },
                                { text: 'Images', link: '/framework/components/images' },
                                { text: 'Links', link: '/framework/components/links' },
                                { text: 'Loading', link: '/framework/components/loading' },
                                { text: 'Rich Text', link: '/framework/components/richtext' },
                            ],
                        },
                        { text: 'Layout', link: '/framework/layout' },
                        { text: 'Lazyload', link: '/framework/lazyload' },
                    ],
                },
                {
                    text: 'Components',
                    children: [
                        { text: 'Alert', link: '/components/alert' },
                        { text: 'Modal', link: '/components/modal' },
                        { text: 'Slide Over', link: '/components/slide-over' },
                        { text: 'Dropdown', link: '/components/dropdown' },
                        { text: 'Tabs', link: '/components/tabs' },
                    ],
                },
                {
                    text: 'Stencils',
                    children: [
                        { text: 'Card', link: '/stencils/card' },
                        { text: 'Figures', link: '/stencils/figures' },
                        { text: 'Pagination', link: '/stencils/pagination' },
                    ],
                },
            ],
        },
        codeLanguages: {
            twig: 'Twig',
            php: 'PHP',
            css: 'CSS',
            scss: 'SCSS',
            pcss: 'PostCSS',
            js: 'JS',
            html: 'HTML',
            sh: 'Shell',
        },
    },
    markdown: {
        anchor: {
            level: [2, 3, 4, 5],
        },
    },
};
