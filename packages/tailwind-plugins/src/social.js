// ==========================================================================
// Social Buttons
// ==========================================================================

// Define your social media colours here. Key should reflect the HTML class you
// add to the li element, and colour should be on-brand.

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, theme }) => {
    const social = {
        facebook: '#537bbd',
        google: '#444749',
        twitter: '#78cdf0',
        linkedin: '#1e88c9',
        instagram: '#696a6a',
        youtube: '#e9654b',
    };

    const components = {};

    Object.entries(social).forEach(([key, value]) => {
        components[`.social-${key}`] = {
            backgroundColor: value,

            '&:hover': {
                backgroundColor: `color(${value} shade(10%))`,
            },
        };
    });

    addComponents(components);
});
