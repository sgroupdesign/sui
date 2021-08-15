// ==========================================================================
// Group Variants
// ==========================================================================

const plugin = require('tailwindcss/plugin');
const selectorParser = require('postcss-selector-parser');
const tap = require('lodash/tap');

function prefixSelector(prefix, selector) {
    const getPrefix = typeof prefix === 'function' ? prefix : () => {
        return (prefix === undefined ? '' : prefix);
    };

    return selectorParser((selectors) => {
        selectors.walkClasses((classSelector) => {
            tap(classSelector.value, (baseClass) => {
                classSelector.value = `${getPrefix(`.${baseClass}`)}${baseClass}`;
            });
        });
    }).processSync(selector);
}

module.exports = plugin(({ addVariant, theme, config, e }) => {
    const groupVariants = theme('groupVariants');

    Object.entries(groupVariants).forEach(([key, value]) => {
        const groupingSelector = key;
        const groupSelector = value.groupSelector ?? '';
        const groupPrefix = value.groupPrefix ?? '';
        const groupSuffix = value.groupSuffix ?? '';

        if (!groupSelector) {
            return console.error(`${key}: You must provide a value for \`groupSelector\`.`);
        }

        addVariant(key, ({ modifySelectors, separator }) => {
            const parser = selectorParser((selectors) => {
                selectors.walkClasses((sel) => {
                    const element = selectorParser().astSync(prefixSelector(config.prefix, `${groupPrefix}.${groupSelector}${groupSuffix} `));
                    
                    sel.value = `${groupingSelector}${separator}${sel.value}`;
                    sel.parent.insertBefore(sel, element);
                });
            });

            return modifySelectors(({ selector }) => { return parser.processSync(selector); });
        });
    });
});
