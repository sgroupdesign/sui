# HTML
[`@sgroup/tailwind-plugins/base`](https://github.com/sgroupdesign/sui/blob/main/packages/tailwind-plugins/src/base)

We provide an extremely minimal, yet opinionated base (on top of Tailwind's [preflight](https://tailwindcss.com/docs/preflight)).

## `[v-cloak]`
For Vue-based projects, any element with this attribute will be hidden until Vue is mounted. See [v-cloak](https://v3.vuejs.org/api/directives.html#v-cloak).

## Font rendering
As a "fix" for rendering fonts across multiple browsers and OS's, we employ a browser fix:

```scss
webkit-font-smoothing: 'antialiased';
moz-osx-font-smoothing: 'grayscale';
moz-font-feature-settings: "liga", "kern";
text-rendering: 'optimizelegibility';
```

### Configuration
Configure the `@sgroup/tailwind-plugins/base` plugin with options.

 ```js
module.exports = {
    plugins: [
        require('@sgroup/tailwind-plugins/base')({
            fontRenderingFix: true,
        }),
    ],
};
```