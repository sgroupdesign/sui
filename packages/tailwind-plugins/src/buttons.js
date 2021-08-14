// ==========================================================================
// Buttons
// ==========================================================================
//
// Available theming:
// theme: {
//     button: (theme) => {
//         return {
//             // Styles for all buttons e.g. `.btn`.
//             DEFAULT: {
//                 paddingLeft: theme('padding.4'),
//                 paddingRight: theme('padding.4'),
//             },

//             // Override or extend any colours. Provide _any_ CSS property.
//             primary: {
//                 color: theme('textColor.white'),
//                 textTransform: 'uppercase',
                
//                 // Use `focus` or `hover` as shortcuts
//                 hover: {
//                     borderColor: theme('borderColor.white'),
//                     backgroundColor: theme('backgroundColor.white'),
//                     color: theme('colors.white'),
//                 },
//             },

//             // Add new named items, like `.btn-outline`.
//             outline: {
//                 backgroundColor: 'transparent',
//                 color: theme('textColor.primary.500'),
//                 borderColor: theme('borderColor.primary.500'),
//             },
//         };
//     },
// },

const _ = require('lodash');
const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, theme, e }) => {
    const components = {};

    // Fetch all button definitions from the defaults or overridden config
    const button = theme('button');

    Object.entries(button).forEach(([index, props]) => {
        const key = index === 'DEFAULT' ? '' : '-' + index;

        // Check if we're using short-hand hover/focus attributes, which would be invalid
        const hoverStyles = props.hover;
        const focusStyles = props.focus;

        if (hoverStyles) {
            delete props.hover;
            props['&:hover, &:focus, &:active'] = hoverStyles;
        }

        if (focusStyles) {
            delete props.focus;
            props['&:focus'] = focusStyles;
        }

        // Output all classes and their props. `.button` and `.button-primary`, etc.
        components[`.${e(`btn${key}`)}`] = props;
    });

    addComponents(components);
}, {
    theme: {
        button: (theme) => {
            const colors = theme('colors');
            const themedButtons = {};

            // Generate defaults for all colours
            Object.entries(colors).forEach(([key, value]) => {
                let colorKey = key + '.500';
                let colorHoverKey = key + '.600';

                // Special handling for some colours.
                if (['transparent', 'current', 'black', 'white'].includes(key)) {
                    colorKey = key;
                    colorHoverKey = key;
                }

                themedButtons[key] = {
                    borderColor: theme(`borderColor.${colorKey}`),
                    backgroundColor: theme(`backgroundColor.${colorKey}`),
                    color: theme('colors.white'),

                    '&.loading::after': {
                        borderBottomColor: '#fff',
                        borderLeftColor: '#fff',
                    },

                    '&:hover, &:focus, &:active': {
                        borderColor: theme(`borderColor.${colorHoverKey}`),
                        backgroundColor: theme(`backgroundColor.${colorHoverKey}`),
                        color: theme('colors.white'),
                    },

                    '&:focus': {
                        '--tw-ring-color': theme(`backgroundColor.${colorKey}`),
                    },
                };
            });

            return {
                DEFAULT: {
                    // Resets
                    display: 'inline-block',
                    WebkitUserSelect: 'none',
                    userSelect: 'none',
                    whiteSpace: 'nowrap',
                    borderStyle: 'solid',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    textDecoration: 'none',
                    outline: theme('outline.none.0'),
                    outlineOffset: theme('outline.none.1'),

                    // Customise
                    paddingLeft: theme('padding.3'),
                    paddingRight: theme('padding.3'),
                    paddingTop: theme('padding.2'),
                    paddingBottom: theme('padding.2'),
                    borderRadius: theme('borderRadius.DEFAULT'),
                    borderWidth: theme('borderWidth.DEFAULT'),
                    borderColor: 'transparent',
                    fontSize: theme('fontSize.base[0]'),
                    lineHeight: theme('fontSize.base[1].lineHeight'),
                    fontWeight: theme('fontWeight.medium'),
                    transitionProperty: theme('transitionProperty.all'),
                    transitionTimingFunction: theme('transitionTimingFunction.in-out'),
                    transitionDuration: theme('transitionDuration.200'),

                    '&:hover, &:focus, &:active': {
                        textDecoration: 'none',
                        outline: theme('outline.none.0'),
                        outlineOffset: theme('outline.none.1'),
                    },

                    '&.disabled, &:disabled': {
                        pointerEvents: 'none',
                        opacity: theme('opacity.75'),
                    },

                    // Opinionated: add "hand" cursor to non-disabled .btn elements
                    '&:not(:disabled):not(.disabled)': {
                        cursor: 'pointer',
                    },

                    // Focus ring defaults (transparent)
                    '&:focus': {
                        '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                        '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                        boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
                        '--tw-ring-color': 'transparent',
                        '--tw-ring-offset-width': '2px',
                    },
                },

                ...themedButtons,
            };
        },
    }
});
