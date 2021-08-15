# Mobile Nav
[`@sui/mobile-nav`](https://github.com/sgroupdesign/sui-vue/blob/main/packages/mobile-nav)

The mobile nav component is a vanilla JS component that aims to do a single thing - toggle a class on the `<html>` element, to let other components on the page control how the mobile menu should be shown. It's this hands-off approach that allows each project to use this component, withough being opinionated at all. 

Despite it being a glorified "class-toggler" - there are some handy utilities specifically for mobile menus.

## Usage
Import the `@sui/mobile-nav` module, and call its constructor.

```js
import MobileNav from '@sui/mobile-nav';

new MobileNav({
    // ....
});
```

## Available options

| Option | Type | Default | Description
| - | - | - | -
| `openSelector` | `String` | `[data-mobile-nav-open]` | The selector string for all open triggers (supports multiple)
| `closeSelector` | `String` | `[data-mobile-nav-close]` | The selector string for all close triggers (supports multiple)
| `activeClass` | `String` | `mobile-nav-open` | The class to toggle on the `<html>` element when clicked.
| `classElement` | `HTMLElement` | `document.documentElement` | The element the active class should be applied to.
| `enableScrollLock` | `Boolean` | `true` | Whether to lock scrolling when triggered.
| `scrollLockElement` | `HTMLElement` | `document.body` | The element scroll-locking should apply to.
| `scrollLockOptions` | `Object` | `{ reserveScrollBarGap: true }` | Settings for the `body-scroll-lock` package.

## Examples

<code-preview body-id="mobile-menu-example" heading="Mobile menu example">
    <div class="flex justify-end items-center bg-white">
        <button type="button" class="btn rounded-md p-2 text-gray-400" aria-expanded="false" data-mobile-nav-open>
            <span class="sr-only">Open menu</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
    </div>

    <div class="mobile-nav-open:opacity-100 mobile-nav-open:visible fixed inset-0 overflow-hidden opacity-0 invisible transition-all ease-in-out duration-500" role="dialog" aria-modal="true">
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute inset-0 bg-gray-500 bg-opacity-75" aria-hidden="true" data-mobile-nav-close></div>

            <div class="fixed inset-y-0 right-0 max-w-full flex">
                <div class="mobile-nav-open:translate-x-0 w-screen max-w-md transform translate-x-full transition ease-in-out duration-500">
                    <button class="btn rounded-md p-2 text-gray-400 absolute right-0 mr-8 mt-12" data-mobile-nav-close>
                        <span class="sr-only">Close panel</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                    <div class="h-full flex flex-col p-6 bg-white shadow-xl"></div>
                </div>
            </div>
        </div>
    </div>
</code-preview>