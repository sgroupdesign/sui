# Layout

## Breakpoints
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

### Desktop-first and single-breakpoint
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


## Containers
We use the [Tailwind](https://tailwindcss.com/docs/container) container for a fixed-width container that "snaps" to each breakpoint. This is in contrast to a "fluid" container that stretches to the full width of the outer container. We find in practice developing to specific breakpoints to be far more efficient than ensuring layout looks perfect at every pixel increment 😅.

```js
container: {
    center: true,
    padding: {
        DEFAULT: '1rem',
        md: '2rem',
    },
},
```

Our default setup is to auto-center the container, providing a `1rem` x-padding and a `2rem` padding after the `md` breakpoint. Feel free to tailor this to your needs for each project.

<code-preview body-id="container-example" heading="Default container">
    <div class="container">
        ...
    </div>
</code-preview>

You can also override the padding or any other classes at the template level.

<code-preview body-id="container-example" heading="Custom classes">
    <div class="container px-20">
        ...
    </div>
</code-preview>

If you want to use a fluid container, simply omit the `.container` class and roll your own classes.

<code-preview body-id="container-example" heading="Fluid container">
    <div class="w-full mx-auto px-4 md:px-8">
        ...
    </div>
</code-preview>

## Flexbox Grid
Our grid system is a tiny layer of flexbox utilities, combined with Tailwind's [width classes](https://tailwindcss.com/docs/width).

<code-preview body-id="col-example" heading="Default columns">
    <div class="container">
        <div class="row">
            <div class="col sm:w-1/3">
                Column 1
            </div>

            <div class="col sm:w-1/3">
                Column 2
            </div>

            <div class="col sm:w-1/3">
                Column 3
            </div>
        </div>
    </div>
</code-preview>

<code-preview body-id="col-example" heading="Small gutters">
    <div class="container">
        <div class="row row-small">
            <div class="col sm:w-1/3">
                Column 1
            </div>

            <div class="col sm:w-1/3">
                Column 2
            </div>

            <div class="col sm:w-1/3">
                Column 3
            </div>
        </div>
    </div>
</code-preview>

As usual, you can override padding and other classes at the template level as well.

<code-preview body-id="col-example" heading="No gutters">
    <div class="container">
        <div class="row -mx-0">
            <div class="col sm:w-1/3 px-0">
                Column 1
            </div>

            <div class="col sm:w-1/3 px-0">
                Column 2
            </div>

            <div class="col sm:w-1/3 px-0">
                Column 3
            </div>
        </div>
    </div>
</code-preview>

You can also completely use Tailwind classes to achieve the same result. 

<code-preview body-id="col-example" heading="Tailwind classes">
    <div class="container">
        <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4 xs:w-1/2">
                Column 1
            </div>

            <div class="w-full px-4 xs:w-1/2">
                Column 2
            </div>
        </div>
    </div>
</code-preview>


Our `.row` and `.col` classes are simple shorthand which are unopinionated. The benefits are:

- Auto full-width on mobile
- Sensible defaults for padding (with small/no padding option)
- Not having to write `flex flex-wrap` all the time.

```scss
.row {
    @apply flex flex-wrap -mx-4;

    &.row-small {
        @apply -mx-2;

        > .col {
            @apply px-2;
        }
    }
}

.col {
    // Full width by default
    @apply px-4 w-full;
}
```

## CSS Grid
Another alternative to using the Flexbox-based grid is to use CSS Grid's, made easier with Tailwind's [grid classes](https://tailwindcss.com/docs/grid-template-columns).

<code-preview body-id="col-example" heading="Grid">
    <div class="container">
        <div class="grid grid-cols-3 gap-x-8 gap-y-4">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
        </div>
    </div>
</code-preview>

The grid utilities make it super-simple to construct gaps between columns and rows, having columns span multiple rows and more.

<code-preview body-id="col-example" heading="Grid cols">
    <div class="container">
        <div class="grid grid-cols-3 gap-4">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div class="col-span-2">4</div>
            <div>5</div>
            <div class="col-span-3">6</div>
        </div>
    </div>
</code-preview>

<code-preview body-id="col-example" heading="Grid cols - start/end">
    <div class="container">
        <div class="grid grid-cols-6 gap-4">
            <div class="col-start-2 col-span-4">1</div>
            <div class="col-start-1 col-end-3">2</div>
            <div class="col-end-7 col-span-2">3</div>
            <div class="col-start-1 col-end-7">4</div>
        </div>
    </div>
</code-preview>

You can also add some non-card-like grids, like the layout for an application with a sidebar.

<code-preview body-id="col-example" heading="Grid sidebar">
    <div class="container">
        <div class="grid grid-rows-3 grid-flow-col gap-4">
            <div class="row-span-3">1</div>
            <div class="col-span-2">2</div>
            <div class="row-span-2 col-span-2">3</div>
        </div>
    </div>
</code-preview>
