const path = require('path');

module.exports = {
    presets: [
        require('@sgroup/tailwind-base'),
    ],

    purge: {
        content: [
            path.resolve(__dirname, '../.vitepress/theme/**/*.{vue,js}'),
            path.resolve(__dirname, '../**/*.md'),
        ],
    },

    theme: {
        extend: {
            groupVariants: {
                'accordion-open': {
                    groupSelector: 'open',
                },
            },
        },
    },
};
