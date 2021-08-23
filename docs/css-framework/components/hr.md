# Horizontal Rule
[`@sui/tailwind-plugins/horizontal-rule`](https://github.com/sgroupdesign/sui-vue/blob/main/packages/tailwind-plugins/src/horizontal-rule)

A horizontal rule is used to separate elements by a thin line. Includes top/bottom padding and a line colour. Clearly the most complicated element in the framework 🤯 .

<code-preview heading="Horizontal rule">
    <hr class="hr">
</code-preview>

### Configuration
Configure the `@sui/tailwind-plugins/horizontal-rule` plugin using `theme` options.

```js
theme: {
    hr: (theme) => {
        return {
            marginTop: theme('margin.8'),
            marginBottom: theme('margin.8'),
            backgroundColor: theme('backgroundColor.gray.400'),
        };
    },
},
```
