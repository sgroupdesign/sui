# Lazyload
We encorporate [Lazysizes](https://github.com/aFarkas/lazysizes) for best-in-class lazyloading. You should use this for any image or background element below the fold for best page performance.

All that's required is adding a `.lazyload` class on an image, and changing the `src` attribute to `data-src`. To further improve this, we've added a fade transition on images so they fade in on-load.

<code-preview body-id="breakpoint-example" heading="Breakpoints - Mobile-first">
    <img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=740&q=80" alt="Responsive image">
</code-preview>

## Background images

Similar to using `img` elements, you can lazyload background image. You'll need to still use the `.lazyload` class, but add the image url to the `data-bg` attribute.

<code-preview body-id="breakpoint-example" heading="Breakpoints - Mobile-first">
    <div class="img-cover aspect aspect-21x9 lazyload" data-bg="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=740&q=80"></div>
</code-preview>

## Loading container

For better visual feedback, you can use the `.lazyload-container` and `.loading` classes to provide a spinning icon when the image is loading.

<code-preview body-id="breakpoint-example" heading="Breakpoints - Mobile-first">
    <div class="lazyload-container loading">
        <img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=740&q=80" alt="Responsive image">
    </div>
</code-preview>

