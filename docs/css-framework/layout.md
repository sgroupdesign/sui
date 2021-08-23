# Layout

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

## CSS Grid
An alternative to using a Flexbox-based grid is to use CSS Grid's, made easier with Tailwind's [grid classes](https://tailwindcss.com/docs/grid-template-columns).

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
