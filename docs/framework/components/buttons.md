# Buttons
The `.btn` class can be added to any element to display it as a button. However, care must be taken when applying to any elements outside of `<button>` and `<input type="button">` to ensure that rendering is consistent across different browsers.

When using button classes on any non-semantic element for example `<a>` or `<div>` that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given the `role="button"` attribute to appropriately convey their purpose to assistive technologies such as screen readers.

<code-preview body-id="buttons-example" heading="Buttons">
    <!-- On an `<a>` element -->
    <a class="btn btn-primary" href="#" role="button">Button</a>

    <!-- On an `<input type="button">` element -->
    <input type="button" class="btn btn-primary" value="Button">

    <!-- On an `<input type="submit">` element -->
    <input type="submit" class="btn btn-primary" value="Button">

    <!-- On an `<button type="button">` element -->
    <button type="button" class="btn btn-primary">Button</button>

    <!-- On an `<button type="submit">` element -->
    <button type="submit" class="btn btn-primary">Button</button>

    <!-- On an `<div>` element - note the use of `tabindex` -->
    <div class="btn btn-primary" role="button" tabindex="-1">Button</div>
</code-preview>

The framework provides serveral predefined button styles, each serving its own purpose.

<code-preview body-id="buttons-example" heading="Theme">
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-warning">Warning</button>
</code-preview>

Buttons also have a distinct hover and focus state. The focus state uses a "ring" for accessibility.

<code-preview body-id="buttons-example" heading="States">
    <button class="btn btn-primary">Regular</button>
    <button class="btn btn-primary btn-hover">Hover</button>
    <button class="btn btn-primary btn-focus">Focus</button>
    <button class="btn btn-primary disabled">Disabled</button>
</code-preview>

To adjust the size of buttons, include additional utility classes as required.

<code-preview body-id="buttons-example" heading="Sizes">
    <button class="btn btn-primary px-2.5 py-1.5 text-xs">XS</button>
    <button class="btn btn-primary px-3 py-2 text-sm leading-4">SM</button>
    <button class="btn btn-primary px-4 py-2 text-sm">Base</button>
    <button class="btn btn-primary px-4 py-2 text-base">LG</button>
    <button class="btn btn-primary px-6 py-3 text-base">XL</button>
</code-preview>

<code-preview body-id="buttons-example" heading="With icons">
    <a class="btn btn-primary inline-flex items-center" href="#" role="button">
        <div class="icon mr-2 h-4 w-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"></path></svg>
        </div>
        Button
    </a>

    <a class="btn btn-primary inline-flex items-center" href="#" role="button">
        Button
        <div class="icon ml-2 h-3 w-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"></path></svg>
        </div>
    </a>
</code-preview>

## Loading state
A button with the `.loading` class can show a loading indicator. This will hide any text on the button.

<code-preview body-id="buttons-example-loading" heading="Loading">
    <button class="btn btn-primary" :class="{ 'loading': buttonLoadingState }" @click.prevent="toggleButtonLoading">Click me!</button>

    <script>
    export default {
        data() {
            return {
                buttonLoadingState: false,
            }
        },

        methods: {
            toggleButtonLoading() {
                this.buttonLoadingState = true;
            },
        },
    };
    </script>
</code-preview>