// ==========================================================================
// Images
// ==========================================================================

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, theme }) => {
    const components = {
        '.img-cover': {
            height: '100%',
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        },

        '.img-contain': {
            height: '100%',
            width: '100%',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        },
    };

    addComponents(components);
});
