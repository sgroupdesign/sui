const defaultConfig = require('tailwindcss/defaultConfig');
const merge = require('lodash/merge');

const preset = require('@sui/tailwind-base');

module.exports = function(plugin, userConfig = {}, useDefaultConfig = false) {
    const testConfig = {
        corePlugins: false,
        theme: {
            screens: {
                xs: 520, sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536,
            },
        },
        plugins: [plugin],
    };

    return useDefaultConfig ? merge({}, defaultConfig, testConfig, userConfig) : merge({}, testConfig, userConfig);
};
