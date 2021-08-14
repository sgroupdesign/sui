const config = require('./config');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');

function run(input, plugin, userConfig) {
    return postcss(tailwindcss(config(plugin, userConfig))).process(input, {
        from: undefined,
    });
}

module.exports = {
    generateBase(plugin, userConfig) {
        return run('@tailwind base;', plugin, userConfig);
    },

    generateComponents(plugin, userConfig) {
        return run('@tailwind components;', plugin, userConfig);
    },

    generateUtilities(plugin, userConfig) {
        return run('@tailwind utilities;', plugin, userConfig);
    },
};
