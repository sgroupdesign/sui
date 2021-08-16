// ==========================================================================
// Alerts
// ==========================================================================
//
// Available theming:
// theme: {
//     alert: (theme) => {
//         return {
//             // Styles for all alerts e.g. `.alert`.
//             DEFAULT: {
//                 marginBottom: 0,
//             },

//             // Override or extend any colours. Provide _any_ CSS property.
//             primary: {
//                 color: theme('textColor.white'),
//             },

//             // Add new named items, like `.alert-success`.
//             success: {
//                 backgroundColor: theme('colors.green.300'),
//                 color: theme('textColor.white'),
//             },
//         };
//     },
// },

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, theme, e }) => {
    const components = {};

    // Fetch all alert definitions from the defaults or overridden config
    const alert = theme('alert');

    Object.entries(alert).forEach(([index, props]) => {
        const key = index === 'DEFAULT' ? '' : `-${index}`;

        // Output all classes and their props. `.alert` and `.alert-primary`, etc.
        components[`.${e(`alert${key}`)}`] = props;
    });

    addComponents(components);
}, {
    theme: {
        alert: (theme) => {
            const colors = theme('colors');
            const themedAlerts = {};

            // Generate defaults for all colours
            Object.entries(colors).forEach(([key, value]) => {
                let backgroundColor = `${key}.100`;
                let color = `${key}.800`;
                let borderColor = `${key}.200`;

                // Special handling for some colours.
                if (['transparent', 'current', 'black', 'white'].includes(key)) {
                    backgroundColor = key;
                    color = key;
                    borderColor = key;
                }

                themedAlerts[key] = {
                    backgroundColor: theme(`backgroundColor.${backgroundColor}`),
                    color: theme(`textColor.${color}`),
                    borderColor: theme(`borderColor.${borderColor}`),
                    borderStyle: 'solid',
                    borderWidth: '1px',
                };
            });

            return {
                DEFAULT: {
                    position: 'relative',
                    marginBottom: theme('margin.4'),
                    borderRadius: theme('borderRadius.DEFAULT'),
                    paddingLeft: theme('padding.4'),
                    paddingRight: theme('padding.4'),
                    paddingTop: theme('padding.3'),
                    paddingBottom: theme('padding.3'),
                },

                ...themedAlerts,
            };
        },
    },
});
