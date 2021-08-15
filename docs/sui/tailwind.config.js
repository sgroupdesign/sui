const path = require('path');

module.exports = {
    presets: [
        require('@sui/tailwind-base'),
    ],

    purge: {
        content: [
            path.resolve(__dirname, '../.vitepress/**/*.{vue,js}'),
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

    variants: {
        extend: {
            display: ['accordion-open'],
        },
    },
};
