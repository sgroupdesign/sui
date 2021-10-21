// ========================================================================
// Rich Text
// ========================================================================

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, theme }) => {
    const values = theme('richtext');

    const components = {
        '.richtext': {
            h2: {
                marginBottom: theme('margin.4'),
            },

            h3: {
                marginBottom: theme('margin.3'),
            },

            'h4, h5, h6': {
                marginBottom: theme('margin.2'),
            },

            blockquote: {
                marginBottom: theme('margin.4'),
                fontSize: theme('fontSize.lg[0]'),
                lineHeight: theme('fontSize.lg[1].lineHeight'),
            },

            p: {
                marginBottom: theme('margin.4'),
            },

            'ul, ol': {
                marginBottom: theme('margin.4'),

                'ul, ol': {
                    marginBottom: '0px',
                },
            },

            'ul li': {
                marginLeft: theme('margin.4'),
                listStyleType: 'disc',

                li: {
                    listStyleType: 'circle',
                },
            },

            'ol li': {
                marginLeft: theme('margin.4'),
                listStyleType: 'decimal',

                li: {
                    listStyleType: 'lower-alpha',
                },
            },

            '> *:last-child': {
                marginBottom: '0px',
            },

            // Merge in any theme-level overrides
            ...values,
        },
    };

    addComponents(components);
});
