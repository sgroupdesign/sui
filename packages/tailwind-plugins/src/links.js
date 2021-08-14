// ==========================================================================
// Links
// ==========================================================================

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, theme }) => {
    const components = {
        // Add the same styles for richtext
        '.link, .richtext a': {
            color: theme('colors.primary.500'),
            textDecoration: 'underline',
            transitionProperty: theme('transitionProperty.DEFAULT'),
            transitionTimingFunction: theme('transitionTimingFunction.in-out'),
            transitionDuration: theme('transitionDuration.200'),

            '&:hover': {
                color: theme('colors.primary.600'),
            },

            '&:focus, &:active, &:hover': {
                textDecoration: 'none',
                outline: theme('outline.none.0'),
                outlineOffset: theme('outline.none.1'),
            },
        },

        '.stretched-link': {
            '&::after': {
                position: 'absolute',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
                zIndex: 1,
                content: '""',
            },
        },
    };

    addComponents(components);
});
