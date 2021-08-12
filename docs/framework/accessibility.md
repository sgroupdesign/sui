# Accessibility
Accessibility is an important part of all websites we work on for the best audience expierience.

Use `sr-only` to hide an element visually without hiding it from screen readers.

<code-preview heading="Screen reader text">
    <a href="#">
        <svg class="icon w-20 h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M499.5 332c0-5.66-3.112-11.13-8.203-14.07l-46.61-26.91C446.8 279.6 448 267.1 448 256s-1.242-23.65-3.34-35.02l46.61-26.91c5.092-2.941 8.203-8.411 8.203-14.07c0-14.1-41.98-99.04-63.86-99.04c-2.832 0-5.688 .7266-8.246 2.203l-46.72 26.98C362.9 94.98 342.4 83.1 320 75.16V21.28c0-7.523-5.162-14.28-12.53-15.82C290.8 1.977 273.7 0 256 0s-34.85 1.977-51.48 5.461C197.2 7.004 192 13.76 192 21.28v53.88C169.6 83.1 149.1 94.98 131.4 110.1L84.63 83.16C82.08 81.68 79.22 80.95 76.39 80.95c-19.72 0-63.86 81.95-63.86 99.04c0 5.66 3.112 11.13 8.203 14.07l46.61 26.91C65.24 232.4 64 244 64 256s1.242 23.65 3.34 35.02l-46.61 26.91c-5.092 2.941-8.203 8.411-8.203 14.07c0 14.1 41.98 99.04 63.86 99.04c2.832 0 5.688-.7266 8.246-2.203l46.72-26.98C149.1 417 169.6 428.9 192 436.8v53.88c0 7.523 5.162 14.28 12.53 15.82C221.2 510 238.3 512 255.1 512s34.85-1.977 51.48-5.461C314.8 504.1 320 498.2 320 490.7v-53.88c22.42-7.938 42.93-19.82 60.65-34.97l46.72 26.98c2.557 1.477 5.416 2.203 8.246 2.203C455.3 431 499.5 349.1 499.5 332zM256 336c-44.11 0-80-35.89-80-80S211.9 176 256 176s80 35.89 80 80S300.1 336 256 336z"></path></svg>
        <span class="sr-only">Settings</span>
    </a>
</code-preview>

Combine `.sr-only` with `focus:not-sr-only` to show the element again when it’s focused (e.g. by a keyboard-only user).

<code-preview heading="Focusing on text">
    Click or select this text, then press tab
    <a class="sr-only focus:not-sr-only" href="#content">Skip to main content</a>
</code-preview>

## Background images
While `img` tags have the `alt` attribute, there's no alternative for backgorund images. In order for screen readers to learn about the contents of an image, use the following syntax:

<code-preview heading="Background images alt text">
    <div class="img-cover aspect aspect-21x9" role="img" aria-label="The wonders of space" style="background-image: url('https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80');"></div>
</code-preview>

But importantly, if you are applying images to an element that also contains other content, you cannot add the description to the outer div. This would be describing the contents of the element, where in fact there are multiple pieces of content to read.

<code-preview heading="Don't do this!">
    <!-- Don't do this! -->
    <div class="img-cover" role="img" aria-label="The wonders of space" style="background-image: url('https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80');">
        <div class="mx-auto text-center py-24">
            <h2 class="text-4xl font-extrabold text-white">Discover the world today</h2>
        </div>
    </div>
</code-preview>

Instead create it as a nested element so you can effectively describe both elements.

<code-preview heading="The proper way to use background images">
    <div class="relative">
        <div class="img-cover aspect aspect-21x9 absolute inset-0" role="img" aria-label="The wonders of space" style="background-image: url('https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80');"></div>

        <div class="mx-auto text-center py-24 relative z-1">
            <h2 class="text-4xl font-extrabold text-white">Discover the world today</h2>
        </div>
    </div>
</code-preview>
