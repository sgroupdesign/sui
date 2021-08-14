# Headings
[`@sui/tailwind-plugins/headings`](https://github.com/sgroupdesign/sui-vue/blob/main/packages/tailwind-plugins/src/headings.js)

`.h1` through `.h6` classes are available, and should be used when styling headings. This helps keep things consistent across the site. Here's the defaults we apply to headings, which includes setting the:

- Font family
- Font weight
- Leading (line height)
- Font size

We **deliberately** keep this lean as in practice setting things like margin, colour and others should be done with utility classes.

<code-preview heading="Headings">
    <h1 class="h1">h1. Framework heading</h1>
    <h2 class="h2">h2. Framework heading</h2>
    <h3 class="h3">h3. Framework heading</h3>
    <h4 class="h4">h4. Framework heading</h4>
    <h5 class="h5">h5. Framework heading</h5>
    <h6 class="h6">h6. Framework heading</h6>
</code-preview>

These classes also work on any other element for convenience.

<code-preview heading="Works on any element">
    <p class="h1">h1. Framework heading</p>
    <span class="h2">h2. Framework heading</span>
    <div class="h3">h3. Framework heading</div>
    <strong class="h4">h4. Framework heading</strong>
    <label class="h5 block">h5. Framework heading</label>
    <legend class="h6">h6. Framework heading</legend>
</code-preview>

When you want to add things like colour and different styles, you should use utility classes. While you might think _every_ `.h1` should be white, this is almost never the case.

<code-preview heading="Works on any element">
    <h2 class="h2 text-blue-500">A blue heading</h2>
    <h2 class="h2 font-bold">A strong heading</h2>
</code-preview>

### Configuration
Configure the `@sui/tailwind-plugins/headings` plugin using `theme` options.

```js
theme: {
    extend: {
        heading: (theme) => {
            return {
                // Styles for all heading e.g. `.h1, .h2, .h3...`.
                DEFAULT: {
                    fontWeight: theme('fontWeight.bold'),
                },

                // Set the `.h1` font size
                1: {
                    fontSize: theme('fontSize.5xl'),
                    textTransform: 'uppercase',
                },
            };
        },
    },
},
```

