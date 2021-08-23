// ==========================================================================
// Forms
// ==========================================================================

const _ = require('lodash');
const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, addBase, theme }) => {
    const primaryColor = theme('forms.primaryColor', theme('colors.primary.500'));

    const formLabel = theme('forms.label', {});
    const formText = theme('forms.text', {});
    const formControl = theme('forms.control', {});
    const formControlColor = theme('forms.controlColor', {});
    const formCheck = theme('forms.check', {});
    const formCheckInput = theme('forms.checkInput', {});
    const formCheckInline = theme('forms.checkInline', {});
    const formFloating = theme('forms.floating', {});

    // Override the primary colour for things like focus state and checkbox/radio
    // which would otherwise be blue.
    addBase({
        '[type=text]:focus, [type=email]:focus, [type=url]:focus, [type=password]:focus, [type=number]:focus, [type=date]:focus, [type=datetime-local]:focus, [type=month]:focus, [type=search]:focus, [type=tel]:focus, [type=time]:focus, [type=week]:focus, [multiple]:focus, textarea:focus, select:focus': {
            '--tw-ring-color': primaryColor,
            borderColor: 'var(--tw-ring-color)',
        },

        '[type=checkbox], [type=radio]': {
            color: primaryColor,
        },

        '[type=checkbox]:focus, [type=radio]:focus': {
            '--tw-ring-color': primaryColor,
        },
    });

    const components = {
        '.form-label': _.defaultsDeep(formLabel, {
            marginBottom: theme('margin.2'),
            display: 'inline-block',
        }),

        // Help text
        '.form-text': _.defaultsDeep(formText, {
            marginTop: theme('margin.1'),
            fontSize: theme('fontSize.sm'),
            color: theme('colors.gray.600'),
        }),

        // General inputs
        '.form-control, .form-select': _.defaultsDeep(formControl, {
            display: 'block',
            width: '100%',
            borderColor: theme('colors.gray.300'),
            borderRadius: theme('borderRadius.md'),
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',

            // Disabled and readonly
            '&:disabled, &[readonly]': {
                backgroundColor: theme('colors.gray.100'),
            },

            // File input buttons theming
            '&[type=file]': {
                overflow: 'hidden',
                borderWidth: '1px',

                '&:not(:disabled):not([readonly])': {
                    cursor: 'pointer',
                },
            },

            // Keep separate due to browser prefix
            '&::file-selector-button': {
                padding: 'theme(\'padding.2\') theme(\'padding.3\')',
                color: theme('colors.gray.800'),
                marginRight: theme('margin.3'),
                pointerEvents: 'none',
                borderColor: 'inherit',
                borderStyle: 'solid',
                borderWidth: '0px',
                borderInlineEndWidth: '1px',
                borderRadius: '0px',
            },

            '&::-webkit-file-upload-button': {
                padding: 'theme(\'padding.2\') theme(\'padding.3\')',
                color: theme('colors.gray.800'),
                marginRight: theme('margin.3'),
                pointerEvents: 'none',
                borderColor: 'inherit',
                borderStyle: 'solid',
                borderWidth: '0px',
                borderInlineEndWidth: '1px',
                borderRadius: '0px',
            },

            '&:hover:not(:disabled):not([readonly])::file-selector-button': {
                backgroundColor: theme('colors.gray.100'),
            },

            '&:hover:not(:disabled):not([readonly])::-webkit-file-upload-button': {
                backgroundColor: theme('colors.gray.100'),
            },
        }),

        // Color inputs
        '.form-control-color': _.defaultsDeep(formControlColor, {
            width: theme('spacing.12'),
            height: theme('spacing.11'),
            padding: theme('padding.1'),
            borderRadius: theme('borderRadius.md'),
            borderWidth: '1px',
            backgroundColor: theme('colors.white'),

            '&::-moz-color-swatch': {
                borderRadius: theme('borderRadius.DEFAULT'),
            },

            '&::-webkit-color-swatch': {
                borderRadius: theme('borderRadius.DEFAULT'),
            },
        }),

        // Checkboxes & Radios
        '.form-check': _.defaultsDeep(formCheck, {
            display: 'block',
            minHeight: '1.5rem',
            paddingLeft: theme('padding.4'),
            marginBottom: theme('margin.1'),

            '.form-check-input': {
                float: 'left',
                marginLeft: theme('margin.-6'),
            },
        }),

        '.form-check-input': _.defaultsDeep(formCheckInput, {
            marginTop: theme('margin.1'),
            borderColor: theme('colors.gray.300'),

            '&[type=checkbox]': {
                borderRadius: theme('borderRadius.DEFAULT'),
            },

            '&[type=radio]': {
                borderRadius: theme('borderRadius.full'),
            },

            '&:checked': {
                borderColor: theme('colors.transparent'),
            },
        }),

        // Inline Checkboxes & Radios
        '.form-check-inline': _.defaultsDeep(formCheckInline, {
            display: 'inline-block',
            marginRight: theme('margin.4'),
        }),

        // Floating labels
        '.form-floating': _.defaultsDeep(formFloating, {
            position: 'relative',

            '> .form-control, > .form-select': {
                height: 'calc(3.5rem + 2px)',
                lineHeight: '1.25',
            },

            '> label': {
                position: 'absolute',
                top: '0',
                left: '0',
                padding: 'theme(\'padding.4\') theme(\'padding.3\')',
                pointerEvents: 'none',
                transformOrigin: '0 0',
                transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out',

                // allow textareas
                height: '100%',

                // Required for aligning label's text with the input as it affects inner box model
                border: '1px solid transparent',
            },

            '> .form-control': {
                padding: 'theme(\'padding.4\') theme(\'padding.3\')',

                '&::placeholder': {
                    color: 'transparent',
                },

                '&:focus, &:not(:placeholder-shown)': {
                    paddingTop: theme('padding')['6.5'],
                    paddingBottom: theme('padding')['2.5'],
                },

                // Duplicated because `:-webkit-autofill` invalidates other selectors when grouped
                '&:-webkit-autofill': {
                    paddingTop: theme('padding')['6.5'],
                    paddingBottom: theme('padding')['2.5'],
                },
            },

            '> .form-select': {
                paddingTop: theme('padding')['6.5'],
                paddingBottom: theme('padding')['2.5'],
            },

            '> .form-control:focus, > .form-control:not(:placeholder-shown), > .form-select': {
                '~ label': {
                    opacity: theme('opacity.65'),
                    transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
                },
            },

            // Duplicated because `:-webkit-autofill` invalidates other selectors when grouped
            '> .form-control:-webkit-autofill': {
                '~ label': {
                    opacity: theme('opacity.65'),
                    transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
                },
            },
        }),
    };

    addComponents(components);
});
