const defaultsDeep = require('lodash/defaultsDeep');

// ================================================
// Responsive breakpoints - override the default, and add more.
// ================================================

function generateScreens(screenSizes) {
    const screenConfig = {};

    // *: for mobile-first (min-width)
    Object.entries(screenSizes).forEach(([key, value], index) => {
        screenConfig[key] = `${value}px`;
    });

    // *-only: for specific breakpoint targetting
    // Desktop-first must be done in reverse order
    Object.keys(screenSizes).reverse().forEach((key, index) => {
        const nextItem = Object.keys(screenSizes).reverse()[index + 1];

        if (nextItem) {
            screenConfig[`to-${key}`] = { max: `${screenSizes[key] - 1}px` };
        }
    });

    // to-*: for desktop-first (max-width)
    Object.entries(screenSizes).forEach(([key, value], index) => {
        const prevItem = Object.entries(screenSizes)[index - 1];
        const nextItem = Object.entries(screenSizes)[index + 1];

        // Single breakpoints
        if (prevItem && nextItem) {
            screenConfig[`${key}-only`] = { min: `${value}px`, max: `${nextItem[1] - 1}px` };
        }
    });

    return screenConfig;
}


// ================================================
// Padding - from *-1 to *-100 (including .25, .5, .75)
// ================================================

const paddingConfig = {};

for (let i = 1; i <= 400; i++) {
    paddingConfig[i / 4] = `${i / 16}rem`;
}


// ================================================
// Margin - from -*-100 to *-100 (including .25, .5, .75)
// ================================================

const marginConfig = {};

for (let i = -400; i <= 400; i++) {
    marginConfig[i / 4] = `${i / 16}rem`;
}


// ================================================
// z-index - from -z-10 to z-10
// ================================================

const zIndexConfig = {};

for (let i = -10; i <= 10; i++) {
    zIndexConfig[i] = `${i}`;
}


// ================================================
// Opacity - from opacity-0 to opacity-100 in steps of 5.
// ================================================

const opacityConfig = {};

for (let i = 0; i <= 100; i += 5) {
    opacityConfig[i] = `${i / 100}`;
}


// ================================================
// Prepare preset export
// ================================================
// presets: [
//     require('@sgroup/tailwind-base'),
//
//     Or by passing a config object
//     require('@sgroup/tailwind-base')({
//         screens: { xs: 520 },
//     }),
// ],

module.exports = function(overrides = {}) {
    // Setup default config, but allow project-defined overrides
    const config = defaultsDeep(overrides, {
        screens: {
            // Our default breakpoints
            xs: 520, sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536,
        },

        // Allow purge options to be modified
        content: [],
        safelist: [],

        // Allow plugin overrides
        pluginForms: {},
    });

    return {
        mode: 'jit',

        content: [
            // Scan the files in these directories for what _not_ to purge
            './templates/**/*.{twig,html}',
            './resources/**/*.{js,vue}',

            // Keep all vendor styles as they're always needed (why else would we add them?)
            './resources/scss/vendor/*.scss',

            ...config.content,
        ],

        safelist: [
            ...config.safelist,
        ],

        theme: {
            // Extend the default Tailwind config
            extend: {
                colors: {
                    // Use https://hihayk.github.io/scale to generate scales
                    primary: {
                        50: '#DEE1F7',
                        100: '#C4C8F1',
                        200: '#A9B0EB',
                        300: '#8F98E5',
                        400: '#747FDE',
                        500: '#5A67D8',
                        600: '#4852AD',
                        700: '#363E82',
                        800: '#242956',
                        900: '#12152B',
                    },

                    secondary: {
                        50: '#FDFEFE',
                        100: '#D4E9E9',
                        200: '#ABD5D4',
                        300: '#83C0BF',
                        400: '#5AACAA',
                        500: '#319795',
                        600: '#277978',
                        700: '#1E5B5A',
                        800: '#143D3D',
                        900: '#0A1F1F',
                    },
                },

                fontFamily: {
                    // Configure for the project
                    body: ['sans-serif'],
                    heading: ['sans-serif'],
                },

                padding: paddingConfig,
                margin: marginConfig,
                zIndex: zIndexConfig,
                opacity: opacityConfig,
            },

            // Replace the default Tailwind config
            screens: generateScreens(config.screens),

            // An opinionated container
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    md: '2rem',
                },
            },

            groupVariants: {
                // Add a `mobile-nav-open` group variant - `html.mobile-nav-open .mobile-nav-open:*`
                'mobile-nav-open': {
                    groupSelector: 'mobile-nav-open',
                    groupPrefix: 'html',
                },

                // Add a `search-open` group variant - `html.search-open .search-open:*`
                'search-open': {
                    groupSelector: 'search-open',
                    groupPrefix: 'html',
                },
            },
        },

        // ================================================
        // Ensure you document all plugins in use
        // ================================================
        plugins: [
            // A unopinionated forms reset
            // https://github.com/tailwindlabs/tailwindcss-forms
            require('@tailwindcss/forms')(config.pluginForms),

            // Truncated text helper
            // https://github.com/tailwindlabs/tailwindcss-line-clamp
            require('@tailwindcss/line-clamp'),

            // S.UI framework plugins for base, components and utilities
            // https://github.com/sgroupdesign/sui
            require('@sgroup/tailwind-plugins/alerts'),
            require('@sgroup/tailwind-plugins/aspect-ratios'),
            require('@sgroup/tailwind-plugins/base'),
            require('@sgroup/tailwind-plugins/breadcrumb'),
            require('@sgroup/tailwind-plugins/break-out'),
            require('@sgroup/tailwind-plugins/buttons'),
            require('@sgroup/tailwind-plugins/columns'),
            require('@sgroup/tailwind-plugins/forms'),
            require('@sgroup/tailwind-plugins/group-variants'),
            require('@sgroup/tailwind-plugins/headings'),
            require('@sgroup/tailwind-plugins/horizontal-rule'),
            require('@sgroup/tailwind-plugins/icons'),
            require('@sgroup/tailwind-plugins/images'),
            require('@sgroup/tailwind-plugins/lazyload'),
            require('@sgroup/tailwind-plugins/links'),
            require('@sgroup/tailwind-plugins/loading'),
            require('@sgroup/tailwind-plugins/position'),
            require('@sgroup/tailwind-plugins/richtext'),
            require('@sgroup/tailwind-plugins/social'),
        ],
    };
};
