// ==========================================================================
// Columns
// ==========================================================================
//
// Available theming:
// theme: {
//     column: (theme) => {
//         return {
//             padding: theme('padding.8'),
//         };
//     },
// },

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, theme }) => {
    const padding = theme('column.padding');
    const paddingSmall = theme('column.paddingSmall');

    const components = {
        '.row': {
            marginLeft: `-${padding}`,
            marginRight: `-${padding}`,
            display: 'flex',
            flexWrap: 'wrap',
        },

        '.col': {
            width: '100%',
            paddingLeft: padding,
            paddingRight: padding,
        },

        '.row.row-small': {
            marginLeft: `-${paddingSmall}`,
            marginRight: `-${paddingSmall}`,
        },

        '.row.row-small > .col': {
            paddingLeft: paddingSmall,
            paddingRight: paddingSmall,
        },
    };

    addComponents(components);
},
{
    theme: {
        column: (theme) => {
            return {
                padding: theme('padding.4'),
                paddingSmall: theme('padding.2'),
            };
        },
    },
});
