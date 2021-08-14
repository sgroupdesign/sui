# Links
[`@sui/tailwind-plugins/links`](https://github.com/sgroupdesign/sui-vue/blob/main/packages/tailwind-plugins/src/links.js)

Links aren't styled by default, so it's up to you to add the `.link` class.

<code-preview heading="Unstyled anchor tag">
    <a href="#">An unstyled link</a>
</code-preview>

<code-preview heading="Styled link">
    <a class="link" href="#">Some link</a>
</code-preview>

 We encourage the use of an underline by default for accessibility, but you can always invert the behaviour through utility classes. You **should not** change this behaviour site-wide unless the design calls for this.

<code-preview heading="Underline inverted">
    <a class="link no-underline hover:underline" href="#">Some link</a>
</code-preview>

As usual, you can also override any classes, but the `.link` class provides a good base.

<code-preview heading="Overrides">
    <a class="link text-red-500 no-underline hover:underline hover:text-red-800" href="#">Some link</a>
</code-preview>

## Stretched link
It's a common scenario to have a card layout with a CTA (button or link) and have the entire card be able to be clicked on. Rather than wrapping a `<a>` tag around the image, heading (and actual link), we can use our `stretched-link` utility.

All that's required is to add a `relative` class to the parent element you want to constrain the link to.

<code-preview heading="Stretched link">
    <div class="mx-auto grid gap-5 grid-cols-3 max-w-none">
        <div class="flex flex-col border relative">
            <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">
            </div>

            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                    <p class="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
                    <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
                </div>

                <div class="mt-6">
                    <a class="btn btn-primary stretched-link" href="#">Read more</a>
                </div>
            </div>
        </div>

        <div class="flex flex-col border relative">
            <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">
            </div>

            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                    <p class="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
                    <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
                </div>

                <div class="mt-6">
                    <a class="link stretched-link" href="#">Read more</a>
                </div>
            </div>
        </div>
    </div>
</code-preview>

Notice in the above examples, hovering over any portion of the card will show the hand cursor. As an added bonus, using this utility will also trigger the `:hover` and `:focus` states on links for superior accessibility.

Not only useful for cards, you can use it in a number of scenarios where you might not want to wrap all items with a `<a>` tag.

<code-preview heading="Another stretched link example.">
    <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
        <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r relative">
            <dd class="text-5xl font-extrabold text-indigo-600">100%</dd>
            <dt class="mt-2 text-lg leading-6 font-medium text-gray-500">Pepperoni</dt>
            <a href="#" class="mt-4 link stretched-link">Find out more</a>
        </div>

        <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r relative">
            <dd class="text-5xl font-extrabold text-indigo-600">24/7</dd>
            <dt class="mt-2 text-lg leading-6 font-medium text-gray-500">Delivery</dt>
            <a href="#" class="mt-4 link stretched-link">Find out more</a>
        </div>

        <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l relative">
            <dd class="text-5xl font-extrabold text-indigo-600">100k</dd>
            <dt class="mt-2 text-lg leading-6 font-medium text-gray-500">Calories</dt>
            <a href="#" class="mt-4 link stretched-link">Find out more</a>
        </div>
    </dl>
</code-preview>
