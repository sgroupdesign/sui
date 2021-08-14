// ==========================================================================
// Breadcrumb
// ==========================================================================
//
// Available options:
// delimiter - [String] - `/` - What string to use to separate breadcrumbs.
// delimiterColor - [String] - `textColor.gray.500` - The dot-notation theme option for the delimiter colour.
// itemPadding - [String] - `padding.2` - The dot-notation theme option for the padding between items.
// maxWidth - [String] - `maxWidth.xs` - The dot-notation theme option for max width for an item.
// textOverflow - [String] - `ellipsis` - The `text-overflow` CSS property when truncated.
// truncateBreakpoint - [Breakpoint] - `sm` - The breakpoint at which items that are too long are truncated.
// collapseBreakpoint - [Breakpoint] - `xs` - The breakpoint at which items are hidden (apart from the first and last items).

const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions((options = {}) => {
    return ({ addComponents, theme }) => {
        const delimiter = options.delimiter ?? '/';
        const delimiterColor = options.delimiterColor ?? 'textColor.gray.500';
        const itemPadding = options.itemPadding ?? 'padding.2';
        const maxWidth = options.maxWidth ?? 'maxWidth.xs';
        const textOverflow = options.textOverflow ?? 'ellipsis';
        const truncateBreakpoint = options.truncateBreakpoint ?? 'sm';
        const collapseBreakpoint = options.collapseBreakpoint ?? 'xs';

        const components = {
            '.breadcrumb': {
                margin: '0px',
                display: 'flex',
                listStyleType: 'none',
                flexWrap: 'wrap',
                padding: '0px',
            },

            '.breadcrumb-item': {
                textOverflow,
                maxWidth: theme(maxWidth),
                overflow: 'hidden',
                whiteSpace: 'nowrap',

                [`@media screen(${truncateBreakpoint})`]: {
                    maxWidth: 'none',
                },
            },

            '.breadcrumb-item + .breadcrumb-item': {
                paddingLeft: theme(itemPadding),

                '&:before': {
                    content: `'${delimiter}'`,
                    display: 'inline-block',
                    paddingRight: theme(itemPadding),
                    color: theme(delimiterColor),
                },
            },

            '.breadcrumb-item:not(:first-child):not(:last-child)': {
                display: 'none',

                [`@media screen(${collapseBreakpoint})`]: {
                    display: 'block',
                },
            },
        };

        addComponents(components);
    };
});
