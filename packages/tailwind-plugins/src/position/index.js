// ==========================================================================
// Position
// ==========================================================================

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents }) => {
    const components = {
        '.align-y': {
            top: '50%',
            transform: 'translate(0, -50%)',
        },

        '.align-x': {
            left: '50%',
            transform: 'translate(-50%, 0)',
        },

        '.align-x-y': {
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    addComponents(components, ['responsive']);
});
