// ==========================================================================
// Group Variants
// ==========================================================================

const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addVariant, config, e }) => {
    const groupVariants = config('groupVariants');

    Object.entries(groupVariants).forEach(([key, value]) => {
        const groupingSelector = key;
        const { groupSelector } = value;
        const groupPrefix = value.groupPrefix ?? '';
        const groupSuffix = value.groupSuffix ?? '';

        if (!groupSelector) {
            return console.error(`${key}: You must provide a value for \`groupSelector\`.`);
        }

        addVariant(key, ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `${groupPrefix}.${groupSelector}${groupSuffix} .${e(`${groupingSelector}${separator}${className}`)}`;
            });
        });
    });
});
