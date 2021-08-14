// ==========================================================================
// Icons
// ==========================================================================

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, theme }) => {
    const components = {
        '.icon': {
            display: 'inline-block',

            svg: {
                height: '100%',
                width: '100%',
                verticalAlign: 'middle',
            },

            '&:not(.no-fill) svg *': {
                fill: 'currentColor',
            },
        },
    };

    addComponents(components);
});
