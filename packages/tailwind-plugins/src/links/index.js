// ==========================================================================
// Links
// ==========================================================================

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, theme }) => {
    const components = {};

    // Fetch all link definitions from the defaults or overridden config
    const link = theme('link');

    Object.entries(link).forEach(([index, props]) => {
        const key = index === 'DEFAULT' ? '' : `-${index}`;

        // Check if we're using short-hand hover/focus attributes, which would be invalid
        const hoverStyles = props.hover;

        if (hoverStyles) {
            delete props.hover;
            props['&:hover'] = hoverStyles;
        }

        // Special-case if this is the default, apply it for rich text fields too
        if (index === 'DEFAULT') {
            components['.link, .richtext a'] = props;
        } else {
            // Output all themed classes
            components[`.${e(`link${key}`)}`] = props;
        }
    });

    // Add the `.stretched-link` class in as well
    components['.stretched-link'] = {
        '&::after': {
            position: 'absolute',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            zIndex: 1,
            content: '""',
        },
    };

    addComponents(components);
}, {
    theme: {
        link: (theme) => {
            const colors = theme('colors');
            const themedLinks = {};

            // Generate defaults for all colours
            Object.entries(colors).forEach(([key, value]) => {
                let colorKey = `${key}.500`;
                let colorHoverKey = `${key}.600`;

                // Special handling for some colours.
                if (['transparent', 'current', 'black', 'white'].includes(key)) {
                    colorKey = key;
                    colorHoverKey = key;
                }

                themedLinks[key] = {
                    color: theme(`textColor.${colorKey}`),

                    '&:hover': {
                        color: theme(`textColor.${colorHoverKey}`),
                    },
                };
            });

            return {
                DEFAULT: {
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

                ...themedLinks,
            };
        },
    },
});
