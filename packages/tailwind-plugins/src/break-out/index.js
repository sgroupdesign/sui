// ==========================================================================
// Break-Out
// ==========================================================================

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, addBase }) => {
    const components = {
        '.break-out': {
            position: 'relative',
            width: '100vw',
            left: 'calc(-1 * (100vw - 100%) / 2)',
        },
    };

    addComponents(components, ['responsive']);

    // Add a class to the `<html>` to prevent overflow.
    addBase({
        html: {
            overflowX: 'hidden',
        },
    });
});
