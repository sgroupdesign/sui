const baseConfig = require('../../../base-craft3-vite/tailwind.config.js');
const path = require('path');

module.exports = {
    ...baseConfig,

    purge: {
        content: [
            path.resolve(__dirname, '../.vitepress/**/*.{vue,js}'),
            path.resolve(__dirname, '../**/*.md'),
        ],
    },
};
