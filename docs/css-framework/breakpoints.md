# Breakpoints
Our breakpoints are largely modelled after Tailwind's [breakpoints](https://tailwindcss.com/docs/breakpoints), and are mobile-first. Namely, we've added a `xs` breakpoint for even more control.

```js
screens: {
    'xs': '520px',   // => @media (min-width: 520px) { ... }
    'sm': '640px',   // => @media (min-width: 640px) { ... }
    'md': '768px',   // => @media (min-width: 768px) { ... }
    'lg': '1024px',  // => @media (min-width: 1024px) { ... }
    'xl': '1280px',  // => @media (min-width: 1280px) { ... }
    '2xl': '1536px', // => @media (min-width: 1536px) { ... }
}
```

<code-preview body-id="breakpoint-example" heading="Breakpoints - Mobile-first">
    <div class="bg-purple-500 xs:bg-red-500 sm:bg-yellow-500 md:bg-primary-500 lg:bg-teriary-500 xl:bg-orange-500 2xl:bg-green-500">
        ...
    </div>
</code-preview>

## Desktop-first and single-breakpoint
We include some additional utilities for breakpoints:

<code-preview body-id="breakpoint-example" heading="Breakpoints - Desktop-first">
    <div class="bg-purple-500 to-xs:bg-red-500 to-sm:bg-yellow-500 to-md:bg-primary-500 to-lg:bg-teriary-500 to-xl:bg-orange-500 to-2xl:bg-green-500">
        ...
    </div>
</code-preview>

<code-preview body-id="breakpoint-example" heading="Breakpoints - md-only">
    <div class="bg-purple-500 md-only:bg-green-500">
        ...
    </div>
</code-preview>

## Configuration
You can customise the breakpoints your project uses by configuring the `@sgroup/tailwind-base` preset.

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