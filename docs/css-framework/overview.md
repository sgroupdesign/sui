# Overview
We use [Tailwind](https://tailwindcss.com/docs) for CSS, due to its flexibility and ease of maintainability. This allows us to use utility classes in your HTML/Twig, rather than worrying about connecting your CSS and HTML, spending time on naming things, and making things more maintainable under a solid API.

When developing sites, always consult the [Tailwind docs](https://tailwindcss.com/docs) first and use their utilities, or their configuration. The S.UI framework is here as a layer on top of Tailwind to provide some quality-of-life utilities and functionality.

## No-CSS Approach
**Don't write any CSS**. It's one of the main benefits of using Tailwind, that you no longer need to write any CSS! Strive to do everything using utility classes in your HTML.

**However** there are scenarios where you might just need to write CSS. You can navigate to `resources/scss`, which has the following structure:

- `resources/`
    - `scss/`
        - `vendor/`
        - `style.scss`

As you can see, you can also use [SCSS](https://sass-lang.com/guide). The `style.scss` contains a well-commented file, split into 3 sections:

- Tailwind includes
- Vendor code (Flickity, Formie, etc)
- Site styles

**Do not** add your CSS to the `style.scss` file. This should be used as an index file and kept clean. Instead, create a new `.scss` file in `resources/scss`.

```scss
// ==========================================================================
// Site Header
// ==========================================================================

.header-wrap {
    // Some complex CSS
}
```

If you've written a component that you think might be re-usable, [tell us about it](https://github.com/sgroupdesign/sui/issues).

Any third-party related like plugins should be placed in `vendor`.

## Modular Approach
With the above no-CSS approach in mind - how do we add our S.UI components like `.btn`, or load in defaults that we use on every project? We take a modular package approach. Instead of including numerous `.scss` files, or a lengthly `tailwind.config.js` file for _every_ project, we publish these as `npm packages`.

Say we discover the `.btn` component is missing a particular reset property, and need to update it. We want this change to effect both new and old installs. Currently, we would have to copy/paste the change manually in the project files.

Or - we discover a new Tailwind plugin, or build a new component we want to include in projects from now on. The same approach applies.

We solve this in two ways: [Presets](https://tailwindcss.com/docs/presets) and [Plugins](https://tailwindcss.com/docs/plugins).

### Tailwind preset
A [preset](https://tailwindcss.com/docs/presets) is just a regular Tailwind configuration object. We take what you'd normally add to your `tailwind.config.js` file or every project, and add it to a preset to include instead.

The below becomes the entirety of our `tailwind.config.js` file for a web project.

```js
module.exports = {
    presets: [
        require('@sgroup/tailwind-base'),
    ],
};
```

This covers:
- Setting up JIT and purge options.
- Including expanded classes for spacing, z-index, opacity.
- Including expanded colours, and `primary` and `secondary`.
- A `.container` that's centred and padded.
- Some plugins `@tailwindcss/forms` and `@tailwindcss/line-clamp`.
- Extending the default Tailwind configuration.

The best part of using a preset is that anything you define in your project's `tailwind.config.js` file overrides the preset.

```js
module.exports = {
    presets: [
        require('@sgroup/tailwind-base'),
    ],

    theme: {
        // Extend the preset rules
        extend: {
            colors: {
                primary: {
                    500: '#5A67D8',
                },
            },

            zIndex: {
                9001: 9001,
            },
        },

        // Completely replace the font families
        fontFamily: {
            body: ['sans-serif'],
            heading: ['sans-serif'],
        },
    },
};
```

Here, despite configuration existing for `zIndex` and `colors.primary` in the preset these will be merged with our configuration. You can also completely override anything defined in the preset like you normally would, moving rules outside of `theme.extend`.

Through this package, we can continue to update this preset as we grow. Projects need only run `npm update` to get the latest and greatest changes. Take a look at the [@sgroup/tailwind-base](https://github.com/sgroupdesign/sui/blob/main/packages/tailwind-base/src/index.js) package for all it does.

#### Preset configuration
You can provide an object to the preset to override some settings.

 ```js
module.exports = {
    presets: [
        require('@sgroup/tailwind-base')({
            screens: {
                // Custom breakpoints for your project
                xs: 480, sm: 640, md: 768, lg: 1024,
            },
        }),
    ],
};
```

### Tailwind plugins
[Plugins](https://tailwindcss.com/docs/plugins) let you register new styles for Tailwind using JavaScript instead of CSS. We use this to allow easy inclusion of a number of custom components and utilities:

- Alerts
- Aspect ratio utilities
- Breadcrumbs
- Break-out container
- Buttons
- Columns
- Headings
- Horizontal rule
- Icons
- Images
- Lazyload images
- Links
- Loading spinner
- Position utilities
- Rich-text
- Social colours

Despite these being "just CSS", we use plugins (written in JS) so they can be published as `npm` packages, which we can include in projects, and run `npm update` whenever changes are made to each component - or new ones added! Otherwise, we find ourselves manually updating CSS per-project, not knowing if the code is the latest, buggy or non-standard.

For example, the [Button](/css-framework/components/buttons) component adds `.btn-*` classes. This component is largely the same for every project, but you still want to control things like padding, font, and colours. Other components are even more "hands-off" and don't need to be configured much, if at all from sane defaults.

Each plugin adds available options to configure, outlined in each component doc page. 

Let's look at a button component, which we can configure via the `theme`.

```js
theme: {
    extend: {
        button: (theme) => {
            return {
                // Styles for all buttons e.g. `.btn`.
                DEFAULT: {
                    paddingLeft: theme('padding.4'),
                    paddingRight: theme('padding.4'),
                },

                // Add new named items, like `.btn-outline`.
                outline: {
                    backgroundColor: 'transparent',
                    color: theme('textColor.primary.500'),
                    borderColor: theme('borderColor.primary.500'),
                },
            };
        },
    },

    // Completely override `button.primary`
    button: (theme) => {
        return {
            primary: {
                color: theme('textColor.white'),
                textTransform: 'uppercase',

                hover: {
                    borderColor: theme('borderColor.white'),
                    backgroundColor: theme('backgroundColor.white'),
                },
            },
        };
    },
},
```

As usual, we can extend the plugin component styles, or completely replace them using `theme.extend` or just `theme`. Be mindful when you completely override plugin styles.

For the above, we're:
- Setting the `px` for all `.btn` instances using `DEFAULT`.
- Adding a new class `.btn-outline`.
- Completely overriding `.btn-primary` with just the configuration defined here.

You'll notice configuring components is very CSS-like - that's because it is! Tailwind uses [`css-in-js`](https://tailwindcss.com/docs/plugins#css-in-js-syntax) syntax. The only real difference being that property names are in `camelCase` - but you can use `kebab-case` if you prefer.

```js
DEFAULT: {
    paddingLeft: theme('padding.4'),
    paddingRight: theme('padding.4'),
},

// Is the exact same as:
DEFAULT: {
    'padding-left': theme('padding.4'),
    'padding-right': theme('padding.4'),
},
```

You can even nest properties, using SCSS-like behaviour with `&` and media queries.

```js
primary: {
    textTransform: 'uppercase',

    '&:hover': {
        backgroundColor: theme('backgroundColor.white'),
    },

    '@media screen(sm)': {
        textTransform: 'lowercase',
    },
},
```
