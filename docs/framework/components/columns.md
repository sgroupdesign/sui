# Columns
[`@sui/tailwind-plugins/columns`](https://github.com/sgroupdesign/sui-vue/blob/main/packages/tailwind-plugins/src/columns.js)

Our grid system is a tiny layer of flexbox utilities, combined with Tailwind's [width classes](https://tailwindcss.com/docs/width). We add `.row` and `.col` classes, which adds:

- Auto full-width on mobile
- Sensible defaults for padding (with small/no padding option)
- Not having to write `flex flex-wrap` all the time.

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


### Configuration
Configure the `@sui/tailwind-plugins/columns` plugin using `theme` options.

```js
theme: {
    column: (theme) => {
        return {
            padding: theme('padding.8'),
        };
    },
},
```
