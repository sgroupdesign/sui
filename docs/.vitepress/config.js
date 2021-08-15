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
                        { text: 'Overview', link: '/framework/overview' },
                        { text: 'Accessibility', link: '/framework/accessibility' },
                        { text: 'Breakpoints', link: '/framework/breakpoints' },
                        { text: 'Colours', link: '/framework/colours' },
                        { text: 'Group Variants', link: '/framework/group-variants' },
                        { text: 'Layout', link: '/framework/layout' },
                        { 
                            text: 'Base',
                            children: [
                                { text: 'HTML', link: '/framework/base/html' },
                            ],
                        },
                        { 
                            text: 'Components',
                            children: [
                                { text: 'Alerts', link: '/framework/components/alerts' },
                                { text: 'Aspect Ratios', link: '/framework/components/aspect-ratios' },
                                { text: 'Breadcrumb', link: '/framework/components/breadcrumb' },
                                { text: 'Buttons', link: '/framework/components/buttons' },
                                { text: 'Columns', link: '/framework/components/columns' },
                                { text: 'Forms', link: '/framework/components/forms' },
                                { text: 'Headings', link: '/framework/components/headings' },
                                { text: 'Horizontal Rule', link: '/framework/components/hr' },
                                { text: 'Icons', link: '/framework/components/icons' },
                                { text: 'Images', link: '/framework/components/images' },
                                { text: 'Lazyload', link: '/framework/components/lazyload' },
                                { text: 'Links', link: '/framework/components/links' },
                                { text: 'Loading', link: '/framework/components/loading' },
                                { text: 'Rich Text', link: '/framework/components/richtext' },
                            ],
                        },
                    ],
                },
                {
                    text: 'Components',
                    children: [
                        { text: 'Alert', link: '/components/alert' },
                        { text: 'Modal', link: '/components/modal' },
                        { text: 'Mobile Nav', link: '/components/mobile-nav' },
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
                {
                    text: 'Resources',
                    children: [
                        { text: 'Vendor Packages', link: '/resources/vendor' },
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
