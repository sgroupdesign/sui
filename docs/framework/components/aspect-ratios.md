# Aspect Ratios
[`@sui/tailwind-plugins/aspect-ratios`](https://github.com/sgroupdesign/sui-vue/blob/main/packages/tailwind-plugins/src/aspect-ratios.js)

Use the ratio helpers to manage the aspect ratios images, background images and external content like `<iframe>`s and `<video>`s.

You can use any values to determine the width and height ratio, up to `21`. Use the `.aspect-2x4` representing the width by height value.

## Images
Because `<img>` elements don't support the `::before` pseudo element, we require a wrapper element.

<code-preview heading="Images - 21x6">
    <div class="aspect aspect-21x6">
        <img src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80">
    </div>
</code-preview>

You'll notice that the image has been squished to the aspect ratio. You can change this be adding `object-*` classes to the `<img>` element.

<code-preview heading="Images with object constraints">
    <div class="aspect aspect-21x6">
        <img src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80" class="object-center object-cover">
    </div>
</code-preview>

## Background images
Background images should use the `img-*` helper classes.

<code-preview heading="Background Images - 21x4">
    <div class="img-cover aspect aspect-21x4" style="background-image: url('https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80');"></div>
</code-preview>

## Videos

<code-preview heading="Video - 16x9">
    <div class="aspect aspect-16x9">
        <iframe src="https://www.youtube.com/embed/3NVqBs6xYJg" allowfullscreen></iframe>
    </div>
</code-preview>

## Standard ratios
You can technically craft any ratio combination you like, but some industry-standard ones are:

<code-preview heading="21:9">
    <div class="img-cover aspect aspect-21x9" style="background-image: url('https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80');"></div>
</code-preview>

<code-preview heading="16:9">
    <div class="img-cover aspect aspect-16x9" style="background-image: url('https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80');"></div>
</code-preview>

<code-preview heading="4:3">
    <div class="img-cover aspect aspect-4x3" style="background-image: url('https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80');"></div>
</code-preview>

<code-preview heading="1:1">
    <div class="img-cover aspect aspect-1x1" style="background-image: url('https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80');"></div>
</code-preview>

## Responsive
You might want to have a set ratio for images on desktop and tablet, but want to un-constrain media when at mobile. You can use `aspect-none` at breakpoints to cater for this.

<code-preview heading="Mobile no aspect ratio">
    <div class="aspect-none md:aspect md:aspect-21x4">
        <img src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80" class="object-center object-cover">
    </div>
</code-preview>

<code-preview heading="Desktop no aspect ratio">
    <div class="aspect aspect-21x4 md:aspect-none">
        <img src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=1400&q=80" class="object-center object-cover">
    </div>
</code-preview>

### Configuration
Configure the `@sui/tailwind-plugins/aspect-ratios` plugin using `theme` options.

```js
theme: {
    // Completely override the aspect ratios
    aspectRatio: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        6: '6',
        9: '9',
        21: '21',
    },

    // Add responsive and hover variants
    variants: {
        aspectRatio: ['responsive', 'hover'],
    },
},
```
