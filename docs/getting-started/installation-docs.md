# Installation (Docs)
These docs use [VitePress](https://vitepress.vuejs.org), which offers crazy-fast ⚡️ development, and bundles all this documentation into a static site. All documenation is written in Markdown files (in `docs`), which is then converted to a static site for deployment.

This guide will cover how to edit these docs. These steps are **not** required for using S.UI in your web projects.

## Getting started
Clone the [sui-vue](https://github.com/sgroupdesign/sui-vue) repository to your computer, open a terminal in the root of this folder and run:

```sh
npm install
```

And wait for the install to complete. Once installed, there are a number of different scripts available:

- `docs:dev` - Starts the Vite HMR dev server and listens to changes in Markdown files. Most commonly used.
- `docs:build` - Creates a full production build, generating a static site in `docs/.vitepress/dist`, ready to be deployed.
- `docs:serve` - Creates a local server for you to browser the resulting build from `docs:build`.

You can run any of these by prefixing `npm run *`.

```sh
npm run docs:dev
```

This will start up the Vite dev server, with HMR to any of your changes appear instantly. Head to `http://localhost:3000/` to browse these docs, and away you go!

## SUI Framework
VitePress allows you to include custom Vue components in pages. We use this to create a "code preview" component, which when supplied with HTML code will show a preview of the rendered result, and tabs to toggle between the code. You can also use the handle to the right to resize the frame for testing responsive breakpoints. It'll even allow you to copy all the code with one click! 😱

It looks a little something like this:

<code-preview heading="An example of code preview">
    <div class="rounded-md bg-green-50 p-4">
        <div class="flex">
            <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
            </div>

            <div class="ml-3">
                <p class="text-sm font-medium text-green-800">Successfully demonstrated how amazing this is 😎</p>
            </div>
        </div>
    </div>
</code-preview>

### How it works
Let's get down to business. This works by providing the raw HTML as a `<slot>` to the Vue component. This is the rendered in an `iframe` element, so that it's isolated from the rest of VitePress, and we can properly demonstrate full-page components like a slide-over, or mobile menu. We use the `srcdoc` attribute for this. 

```vue
<code-preview heading="A heading for this component">
    This will be rendered as the preview, and shown as code.
</code-preview>
```

However in order for the resulting code to not only look correct using Tailwind + our S.UI framework CSS, it needs to use the Headless UI + S.UI JS components as well. We need to import both these things into the iframe to get an accurate "playground" of how things will look and act on a real site.

The actual body of the iframe (what we pass into the `srcdoc` attribute) looks something like this:

```html
<!doctype html>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="/style.css">
<script src="/components.js" type="module"></script>
<script src="/iframe.js" defer></script>

<body class="antialiased font-sans bg-gray-200 overflow-hidden">
    <div id="demo-app" class="bg-white">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto">
                <!-- Slot content goes here -->
            </div>
        </div>
    </div>
</body>
```

Apart from a little Tailwind goodness to wrap the slots' provided code, we're importing 3 things, `style.css`, `components.js` and `iframe.js`. We use `iframe.js` to listen to when content has been rendered in the `iframe` and adjust the height of it automatically - something and `iframe` doesn't do. The other two are the CSS and JS that would be normally part of our `base-craft` project, but need to be included in the iframe for "real" results.

In order for this to happen, we have a nested module in `docs/sui` that is another Vite project, that compiles CSS/JS and adds them to VitePress' `public` folder as static assets, which are included in each `iframe` document. Just like the S.UI framework used on a project, we use Tailwind and JIT processing to keep this lean and fast.

The `sui/src/components.js` file is very simple, pulling in all `@sui` JS components, and the S.UI CSS (which includes Tailwind), in almost the exact same manner as we would for a web project.

### Rebuilding
One critical point is that due to Tailwind's purge, we'll periodically need to rebuild the CSS used in `iframe`'s, as we add new examples. Similarly, when we add new `@sui` JS components, we'll always want them available to code preview's. In order for this to happen, we need to rebuild the "S.UI framework" for these components to use.

Fortunately, this is straightforward with the following `npm` commands:

- `docs:sui-build`: Creates the built files in `docs/public`.
- `docs:sui-watch`: Creates the built files in `docs/public` and watches for any changes to `docs/sui/src/*` files.
- `docs:watch`: Runs `docs:sui-watch` watching changes, then `docs:dev` to start the dev server for VitePress.

You'll find yourself commonly going for the `docs:watch` option which is the best of both worlds.

```sh
npm run docs:watch
```

Using the `watch` command, the secondary Vite process (which is building the S.UI CSS/JS) will watch for any changes you make to the Markdown files, and re-compile automatically, ensuring it scans all files to purge (or include) appropriate CSS. This will also be the case for when you want to include any `@sui` JS components.
