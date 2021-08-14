// ==========================================================================
// Aspect Ratios
// ==========================================================================
//
// Available theming:
// theme: {
//     aspectRatio: {
//         1: '1',
//     },
// },
//
// variants: {
//     aspectRatio: ['responsive', 'hover'],
// },
//
// Usage with videos
// <div class="aspect-none lg:aspect lg:aspect-16x9">
//     <iframe src="..."></iframe>
// </div>
//
// Usage with images
// <div class="aspect aspect-1x1">
//     <img src=".." class="object-center object-cover">
// </div>
//

const plugin = require('tailwindcss/plugin');

const aspectRatio = {};

// Generate { 1: 1 } to { 21: 21 }
for (let i = 1; i <= 21; i++) {
    aspectRatio[i] = i;
}

module.exports = plugin(({
    addComponents, theme, variants, e,
}) => {
    const components = {
        '.aspect': {
            position: 'relative',
            width: '100%',

            '&::before': {
                display: 'block',
                paddingBottom: 'var(--aspect-ratio)',
                content: "''",
            },

            '> *': {
                position: 'absolute',
                height: '100%',
                width: '100%',
                top: '0',
                right: '0',
                bottom: '0',
                left: '0',
            },
        },

        '.aspect-none': {
            '&::before': {
                paddingBottom: '0px',
            },

            '> *': {
                position: 'static',
                height: 'auto',
                width: 'auto',
                top: 'auto',
                right: 'auto',
                bottom: 'auto',
                left: 'auto',
            },
        },
    };

    const values = theme('aspectRatio');

    Object.entries(values).forEach(([wKey, wValue]) => {
        Object.entries(values).forEach(([hKey, hValue]) => {
            components[`.${e(`aspect-${wKey}x${hKey}`)}`] = {
                '--aspect-ratio': `calc(${hValue} / ${wValue} * 100%)`,
            };
        });
    }),

    addComponents(components, variants('aspectRatio'));
},
{
    theme: {
        aspectRatio,
    },

    variants: {
        aspectRatio: ['responsive'],
    },
});
