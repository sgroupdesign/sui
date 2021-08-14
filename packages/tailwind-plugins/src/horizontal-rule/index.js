// ==========================================================================
// Horizontal Rule
// ==========================================================================
//
// Available theming:
// theme: {
//     hr: (theme) => {
//         return {
//             marginTop: theme('margin.8'),
//             marginBottom: theme('margin.8'),
//             backgroundColor: theme('backgroundColor.gray.400'),
//         };
//     },
// },

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, theme }) => {
    const hr = theme('hr', {});

    const components = {
        '.hr': hr,
    };

    addComponents(components);
}, {
    theme: {
        hr: (theme) => {
            return {
                border: '0',
                outline: '0',
                height: '1px',
                marginTop: theme('margin.8'),
                marginBottom: theme('margin.8'),
                backgroundColor: theme('backgroundColor.gray.400'),
            };
        },
    },
});
