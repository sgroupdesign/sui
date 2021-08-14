// ==========================================================================
// Headings
// ==========================================================================
//
// Available theming:
// theme: {
//     heading: (theme) => {
//         return {
//             DEFAULT: {
//                 fontWeight: theme('fontWeight.bold'),
//             },

//             1: {
//                 fontSize: theme('fontSize.5xl'),
//             },
//         };
//     },
// },

const plugin = require('tailwindcss/plugin');

const transformProperties = require('../utils/transformProperties');

module.exports = plugin(({ addComponents, theme, e }) => {
    const heading = theme('heading', {});

    // Set .h1, .h2, .h3, .h4, .h5, .h6
    const baseSelectors = Object.entries(heading).map(([key, value]) => {
        return (key !== 'DEFAULT') ? `.${e(`h${key}`)}` : false;
    }).filter(Boolean).join(',\n');

    const components = {
        // Set .h1, .h2, .h3, .h4, .h5, .h6
        [baseSelectors]: transformProperties(heading.DEFAULT),
    };

    // Per-heading definitions
    Object.entries(heading).forEach(([index, props]) => {
        // Add the same styles for richtext
        const key = `.${e(`h${index}`)},\n.richtext ${e(`h${index}`)}`;

        if (index !== 'DEFAULT') {
            components[key] = transformProperties(props);
        }
    });

    addComponents(components, ['responsive']);
}, {
    theme: {
        heading: (theme) => {
            return {
                DEFAULT: {
                    fontFamily: theme('fontFamily.heading'),
                    fontWeight: theme('fontWeight.medium'),
                    lineHeight: theme('lineHeight.tight'),
                },

                1: {
                    fontSize: theme('fontSize.4xl'),
                },

                2: {
                    fontSize: theme('fontSize.3xl'),
                },

                3: {
                    fontSize: theme('fontSize.2xl'),
                },

                4: {
                    fontSize: theme('fontSize.xl'),
                },

                5: {
                    fontSize: theme('fontSize.lg'),
                },

                6: {
                    fontSize: theme('fontSize.base'),
                },
            };
        },
    },
});
