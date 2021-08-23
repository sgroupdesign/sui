# Alerts
[`@sgroup/tailwind-plugins/alert`](https://github.com/sgroupdesign/sui/blob/main/packages/tailwind-plugins/src/alert)

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

::: tip 
Be sure to check out our [Alert Component](/js-framework/components/alert) for more interactivity.
:::

<code-preview heading="Theme options">
    <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
    </div>

    <div class="alert alert-secondary" role="alert">
        A simple secondary alert—check it out!
    </div>

    <div class="alert alert-emerald" role="alert">
        A simple success alert—check it out!
    </div>

    <div class="alert alert-red" role="alert">
        A simple danger alert—check it out!
    </div>

    <div class="alert alert-orange" role="alert">
        A simple warning alert—check it out!
    </div>

    <div class="alert alert-blue" role="alert">
        A simple info alert—check it out!
    </div>
</code-preview>

### Configuration
Configure the `@sgroup/tailwind-plugins/alert` plugin using `theme` options.

```js
theme: {
    extend: {
        alert: (theme) => {
            return {
                // Styles for all alerts e.g. `.alert`.
                DEFAULT: {
                    marginBottom: 0,
                },

                // Override or extend any themed alerts. Provide _any_ CSS property.
                primary: {
                    color: theme('textColor.white'),
                },

                // Add new named items, like `.alert-success`.
                success: {
                    backgroundColor: theme('colors.green.300'),
                    color: theme('textColor.white'),
                },
            };
        },
    },
},
```