# Group Variants
[`@sgroup/tailwind-plugins/group-variants`](https://github.com/sgroupdesign/sui/blob/main/packages/tailwind-plugins/src/group-variants/index)

You should hopefully be familar with the concept of [Tailwind variants](https://tailwindcss.com/docs/configuring-variants). There are some special types of variants, which "group" functionality together. One of which is the `group-hover` variant.

<code-preview body-id="breakpoint-example" heading="Group-hover example">
    <div class="group border p-8">
        <p class="text-indigo-600 group-hover:text-gray-900">New Project</p>
        <p class="text-indigo-600 group-hover:text-gray-900">Create a new project from a variety of starting templates.</p>
    </div>
</code-preview>

Here, you can see hovering over the outer element actually triggers the colour of **both** inner elements. This is through a combination of `group` and `group-hover` classes to define the parent and child elements relationship, respectively.

Through this plugin, we can create completely new variants for grouping, quickly and easily. In your `tailwind.config.js` file:

```js
theme: {
    extend: {
        groupVariants: {
            'group-parent': {
                groupSelector: 'group-child',
            },
        },
    },
},

variants: {
    extend: {
        display: ['group-parent'],
    },
},
```

Would produce CSS like:

```
.group-parent .group-child:block {
    display: block
}

.group-parent .group-child:inline-block {
    display: inline-block
}

...etc
```

Let's cover the `theme.groupVariants` first. 

You can add multiple objects defining the selectors for parent and child selectors. You can also supply a `groupPrefix` and `groupSuffix` to add more configuration to the parent selector.

```js
groupVariants: {
    'group-parent': {
        groupPrefix: 'body',
        groupSelector: 'group-child',
        groupSuffix: ':before',
    },

    'another-parent': {
        groupPrefix: '.some-parent',
        groupSelector: 'another-child',
    },
},
```

Which would produce:

```
body.group-parent:before .group-child:block {
    display: block
}

.some-parent.another-parent .another-child:block {
    display: block
}
...etc
```

The second part is to add the group variant you've defined to your `variants` configuration in order for them to actually used.

```js
variants: {
    extend: {
        display: ['group-parent'],
    },
},
```

Here, we're enabling all `display` classes to generate the `group-parent` group variant we've defined.

There's plenty of use-cases for this, but let's explore a few.

## Mobile Menu
A common pattern for a mobile menu is to show a slide-out when clicking on an icon in the header. A great way to handle this is to toggle a class on the `<html>` element, and then using CSS selectors, change behaviour based on this classes existance.

In CSS this would be trivial using something like:

```css
.menu-open {
    .menu-overlay {
        @apply opacity-100 visible;
    }

    .menu-pane {
        @apply translate-x-0;
    }
}
```

But this relies on CSS, which we'd rather not do if we can help it, instead relying on utility classes. Not to mention every project might implement a mobile-menu differently - we want a bit more flexibility here.

Let's define a custom group variant to handle this.

::: tip
This is already part of our [@sgroup/tailwind-base](https://github.com/sgroupdesign/sui/blob/main/packages/tailwind-base/src/index) package.
:::

```js
theme: {
    extend: {
        groupVariants: {
            // Add a `mobile-nav-open` group variant - `html.mobile-nav-open .mobile-nav-open:*`
            'mobile-nav-open': {
                groupSelector: 'mobile-nav-open',
                groupPrefix: 'html',
            },
        },
    },
},

variants: {
    extend: {
        opacity: ['mobile-nav-open'],
        display: ['mobile-nav-open'],
        translate: ['mobile-nav-open'],
        visibility: ['mobile-nav-open'],
    },
},
```

Here, we're creating a `mobile-nav-open` group variant as **both** the parent and child selectors, just for convenience. Putting this into action and combining with our [Mobile Nav](/js-framework/components/mobile-nav) component to toggle the class on the body element:

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

Ignoring the fact that we toggle a `mobile-menu-open` class on the `<html>` element with JS, we're using the following to trigger this functionality:

```html
<html>
    <div class="mobile-nav-open:opacity-100 mobile-nav-open:visible ...">
        <div class="...">
            <div class="...">
                <div class="mobile-nav-open:translate-x-0 ...">
```

Because we have enabled `opacity`, `visibility` and `translate` variants to be able to use `mobile-nav-open`, we can use any of their utility classes as variants. Loading the page, this would **not** apply any `mobile-nav-open:*` classes until there's a `html.mobile-nav-open` parent class selector.


```html{1}
<html class="mobile-nav-open">
    <div class="mobile-nav-open:opacity-100 mobile-nav-open:visible ...">
        <div class="...">
            <div class="...">
                <div class="mobile-nav-open:translate-x-0 ...">
```

## Accordion
Similar to the above, you might want to trigger opening of an accordion, when a parent selector (the overall accordion) has a class set.

```js
theme: {
    extend: {
        groupVariants: {
            // Add a `accordion-open` group variant - `.accordion-open .open:*`
            'accordion-open': {
                groupSelector: 'open',
            },
        },
    },
},

// Setup our `mobile-nav-open` group variant to be used on a few variants, by default
variants: {
    extend: {
        display: ['accordion-open'],
    },
},
```

Instead of binding to the `<html>` element but we're applying to the `.accordion` element.
 
<code-preview heading="Accordion example">
    <div class="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        <div>
            <button class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" type="button" aria-expanded="true" onclick="parentElement.classList.toggle('open')">
                <span>What is your refund policy?</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="transform rotate-180 w-5 h-5 text-purple-500"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
            </button>

            <div class="hidden accordion-open:block px-4 pt-4 pb-2 text-sm text-gray-500">If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.</div>
        </div>

        <div class="mt-2">
            <button class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" type="button" aria-expanded="true" onclick="parentElement.classList.toggle('open')">
                <span>Do you offer technical support?</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="transform rotate-180 w-5 h-5 text-purple-500"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
            </button>

            <div class="hidden accordion-open:block px-4 pt-4 pb-2 text-sm text-gray-500">No.</div>
        </div>
    </div>
</code-preview>

Ignoring the fact that we toggle a `open` class on the `<div>` element with JS, we're using the following to trigger this functionality:

```html
<div>
    <button onclick="parentElement.classList.toggle('open')">
        <div class="hidden accordion-open:block ...">
```

Because we have enabled `opacity`, `visibility` and `translate` variants to be able to use `mobile-nav-open`, we can use any of their utility classes as variants. Loading the page, this would **not** apply any `mobile-nav-open:*` classes until there's a `html.mobile-nav-open` parent class selector.


```html{1}
<div class="open">
    <button onclick="parentElement.classList.toggle('open')">
        <div class="hidden accordion-open:block ...">
```

Because we have enabled `display` variants to be able to use `accordion-open`, we can use any of their utility classes as variants. Loading the page, this would **not** apply any `accordion-open:*` classes until there's a `.open` parent class selector.
