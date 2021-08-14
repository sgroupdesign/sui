// ==========================================================================
// Lazyload
// ==========================================================================

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, theme }) => {
    const components = {
        '.lazyload, .lazyloading': {
            opacity: 0,
        },

        '.lazyloaded': {
            opacity: 1,
            transitionProperty: 'opacity',
            transitionTimingFunction: theme('transitionTimingFunction.in-out'),
            transitionDuration: theme('transitionDuration.200'),
        },
    };

    addComponents(components);
});
