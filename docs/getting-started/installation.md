# Installation
The build process for S.UI projects uses [Vite](https://vitejs.dev) as a super-fast ⚡️ development server, with hot module reloading (HMR) making changes to your Twig, JS and CSS almost instant, and without refreshing the page.

## Getting started
Clone the [base-craft](https://github.com/sgroupdesign/base-craft3) repository to your computer, open a terminal in the root of this folder and run:

```sh
npm install
```

And wait for the install to complete. Once installed, there are a number of different scripts available:

- `dev` - Starts the Vite HMR dev server and listens to changes for files. Most commonly used.
- `build` - Creates a full production build, copying assets, and compiling CSS/JS, ready to be deployed.
- `watch` - Runs a `build` process, and watches files for changes. Otherwise the "traditional" approach like Webpack or Laravel Mix.

You can run any of these by prefixing `npm run *`.

```sh
npm run dev
```

Once run, you can make your CSS/JS changes until you make something amazing 🎉.

## Difference to Webpack / Laravel Mix
There's a difference in behaviour with Vite compared to Laravel Mix in that we're using HMR to do our development, which makes things very quick. As such, there's no longer a task watching process listening to changes on files and compiling/parsing them. While this was convenient, this was in practice slow.

#### Required scripts
During development, all CSS and JS is served via JS modules, which lends to its speed - not needing to bundle everything for dev. We use the [Craft Vite](https://nystudio107.com/docs/vite/) plugin to handle everything.

```twig
{{ craft.vite.script('js/main.js', false) }}
```

The above in the sole file we need to include on the page. During development, this will load `js/main.js`, which being a JS module, will lazy-load in all other assets - including the CSS! 

```html
<script type="module" src="http://localhost:3000/js/main.js"></script>
```

When running `build` this will be swapped out to normal includes, and not relying on JS modules (which aren't cross-browser compatible - yet!).

```html
<script type="module" src="https://example.com/dist/main.56c9ea9d.js" crossorigin></script>
<link href="https://example.com/dist/style.c30f6458.css" rel="stylesheet">
```

#### Where are my styles?
If you find yourself looking at a blank page, or your changes have been lost once you've stopped the dev server - don't fret! You'll need to run `npm run build` to take your changes you've been making, and make them production-ready.

#### You need to use `npm run build`
In the past, you could've gotten away with deploying un-minified code (non-production or non-built) code, that's no longer the case. Instead, you'll need to `build` every time you want to deploy CSS/JS changes to a server. This is however in good practice, as during staging development, you'll be dealing with "production-ready" assets, so you'll be able to identify any issues immediately. This is in contrast to dealing with them at the final production step when you're under the pump 😬.

#### Legacy support
Vite will create multiple JS files, depending on what browsers we target. The appropriate bundle will be served, depending on the end user's browser. This is great news in that we can keep a modern JS build lean, without having to add polyfills for older browsers.

You also don't need to worry about serving up the correct one, as the Craft Vite plugin will sort it out.

```html
<script>
    !function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();
</script>

<script type="nomodule" src="https://example.com/dist/polyfills-legacy.8fce4e35.js"></script>
<script type="module" src="https://example.com/dist/main.56c9ea9d.js" crossorigin></script>
<script type="nomodule" src="https://example.com/dist/main-legacy.0c84e934.js"></script>

<link href="https://example.com/dist/style.c30f6458.css" rel="stylesheet">
```

The above adds a `polyfill` and `main-legacy` JS file, which are only loaded for legacy browsers.
