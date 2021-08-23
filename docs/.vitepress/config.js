const path = require('path')

module.exports = {
    lang: 'en-AU',
    title: 'S.UI',

    themeConfig: {
        repo: 'sgroupdesign/sui',
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
                        { text: 'Overview', link: '/css-framework/overview' },
                        { text: 'Accessibility', link: '/css-framework/accessibility' },
                        { text: 'Breakpoints', link: '/css-framework/breakpoints' },
                        { text: 'Colours', link: '/css-framework/colours' },
                        { text: 'Group Variants', link: '/css-framework/group-variants' },
                        { text: 'Layout', link: '/css-framework/layout' },
                        { 
                            text: 'Base',
                            children: [
                                { text: 'HTML', link: '/css-framework/base/html' },
                            ],
                        },
                        { 
                            text: 'Components',
                            children: [
                                { text: 'Alerts', link: '/css-framework/components/alerts' },
                                { text: 'Aspect Ratios', link: '/css-framework/components/aspect-ratios' },
                                { text: 'Breadcrumb', link: '/css-framework/components/breadcrumb' },
                                { text: 'Buttons', link: '/css-framework/components/buttons' },
                                { text: 'Columns', link: '/css-framework/components/columns' },
                                { text: 'Forms', link: '/css-framework/components/forms' },
                                { text: 'Headings', link: '/css-framework/components/headings' },
                                { text: 'Horizontal Rule', link: '/fcss-ramework/components/hr' },
                                { text: 'Icons', link: '/css-framework/components/icons' },
                                { text: 'Images', link: '/css-framework/components/images' },
                                { text: 'Lazyload', link: '/css-framework/components/lazyload' },
                                { text: 'Links', link: '/css-framework/components/links' },
                                { text: 'Loading', link: '/css-framework/components/loading' },
                                { text: 'Rich Text', link: '/css-framework/components/richtext' },
                            ],
                        },
                    ],
                },
                {
                    text: 'JS Framework',
                    children: [
                        { text: 'Overview', link: '/js-framework/overview' },
                        { 
                            text: 'Components',
                            children: [
                                { text: 'Accordion', link: '/js-framework/components/accordion' },
                                { text: 'Alert', link: '/js-framework/components/alert' },
                                { text: 'Listbox', link: '/js-framework/components/listbox' },
                                { text: 'Menu', link: '/js-framework/components/menu' },
                                { text: 'Mobile Nav', link: '/js-framework/components/mobile-nav' },
                                { text: 'Modal', link: '/js-framework/components/modal' },
                                { text: 'Popover', link: '/js-framework/components/popover' },
                                { text: 'Radio Group', link: '/js-framework/components/radio-group' },
                                { text: 'Switch', link: '/js-framework/components/switch' },
                                { text: 'Tabs', link: '/js-framework/components/tabs' },
                            ],
                        },
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
