# Images
[`@sui/tailwind-plugins/images`](https://github.com/sgroupdesign/sui-vue/blob/main/packages/tailwind-plugins/src/images)

Images are responsive by default.

<code-preview heading="Images">
    <img src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80" alt="Responsive image">
</code-preview>

## Background Images
Images can be applied to background of elements, and there are helper classes to make this easier for you. Typically, these implementations should combine with lazyloading. These also require the use of [aspect ratio helpers](/css-framework/components/aspect-ratios) or a fixed height.

### Cover
Using `.img-cover` will fill the image to the container dimensions.

<code-preview heading="Cover">
    <div class="img-cover aspect aspect-21x9" style="background-image: url('https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80');"></div>
</code-preview>

### Contain
Using `.img-contain` will constrain the image to the container dimensions.

<code-preview body-id="bg-contain-example" heading="Contain">
    <div class="img-contain aspect aspect-21x9" style="background-image: url('https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80');"></div>
</code-preview>
