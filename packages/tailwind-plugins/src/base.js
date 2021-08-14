// ==========================================================================
// Aspect Ratios
// ==========================================================================
//
// Available options:
// fontRenderingFix - [Boolean] - `true` - Whether to add font-smoothing 'fix' on the page body.

const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions((options = {}) => {
    return ({ addBase }) => {
        const fontRenderingFix = options.fontRenderingFix ?? true;

        const base = {
            // Vue.js hiding content initially
            '[v-cloak]': {
                display: 'none !important',
            },
        };

        if (fontRenderingFix) {
            base.body = {
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                MozFontFeatureSettings: '"liga", "kern"',
                textRendering: 'optimizelegibility',
            };
        }

        addBase(base);
    };
});
