// ==========================================================================
// Loading
// ==========================================================================

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, theme }) => {
    const components = {
        '.loading': {
            pointerEvents: 'none',
            position: 'relative',
            color: 'transparent !important',
            minHeight: theme('spacing.4'),

            '&::after': {
                position: 'absolute',
                zIndex: 1,
                marginTop: theme('margin.-2'),
                marginLeft: theme('margin.-2'),
                display: 'block',
                height: theme('spacing.4'),
                width: theme('spacing.4'),
                borderRadius: theme('borderRadius.full'),
                borderWidth: theme('borderWidth.2'),
                borderStyle: theme('borderStyle.solid'),
                borderColor: theme('borderColor.primary.500'),
                top: '50%',
                left: '50%',
                animation: 'loading 0.5s infinite linear',
                borderRightColor: 'transparent !important',
                borderTopColor: 'transparent !important',
                content: "''",
            },

            '&.loading-lg': {
                minHeight: theme('spacing.8'),

                '&::after': {
                    marginTop: theme('margin.-4'),
                    marginLeft: theme('margin.-4'),
                    height: theme('spacing.8'),
                    width: theme('spacing.8'),
                },
            },
        },

        '@keyframes loading': {
            '0%': { transform: 'rotate(0)' },
            '100%': { transform: 'rotate(360deg)' },
        },
    };

    addComponents(components);
});
