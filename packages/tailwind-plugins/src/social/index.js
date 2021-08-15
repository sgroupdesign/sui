// ==========================================================================
// Social Buttons
// ==========================================================================

// Define your social media colours here. Key should reflect the HTML class you
// add to the li element, and colour should be on-brand.

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, theme }) => {
    const social = {
        facebook: '#537bbd',
        twitter: '#78cdf0',
        linkedin: '#1e88c9',
        instagram: '#eb4b54',
        youtube: '#e9654b',
        pinterest: '#e60122',
    };

    const components = {};

    Object.entries(social).forEach(([key, value]) => {
        components[`.text-social-${key}`] = {
            color: value,

            '&:hover': {
                color: `color(${value} shade(10%))`,
            },
        };

        components[`.bg-social-${key}`] = {
            backgroundColor: value,

            '&:hover': {
                backgroundColor: `color(${value} shade(10%))`,
            },
        };
    });

    addComponents(components);
});
