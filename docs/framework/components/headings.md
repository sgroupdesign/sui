# Headings
`.h1` through `.h6` classes are available, and should be used when styling headings. This helps keep things consistent across the site.

<code-preview heading="Headings">
    <h1 class="h1">h1. Framework heading</h1>
    <h2 class="h2">h2. Framework heading</h2>
    <h3 class="h3">h3. Framework heading</h3>
    <h4 class="h4">h4. Framework heading</h4>
    <h5 class="h5">h5. Framework heading</h5>
    <h6 class="h6">h6. Framework heading</h6>
</code-preview>

Feel free to tweak the `base/elements/headings.scss` file for your project needs. Here's the defaults we apply to headings, which includes setting the:

- Font family
- Font weight
- Leading (line height)
- Font size
- Responsive font-size for breakpoints

```scss
.h1, .h2, .h3, .h4, .h5, .h6 {
    @apply font-heading font-medium leading-tight;
}

.h1 {
    @apply text-3xl;

    @screen md {
        @apply text-4xl;
    }
}

.h2 {
    @apply text-2xl;

    @screen md {
        @apply text-3xl;
    }
}

.h3 {
    @apply text-xl;

    @screen md {
        @apply text-2xl;
    }
}

.h4 {
    @apply text-lg;

    @screen md {
        @apply text-xl;
    }
}

.h5 {
    @apply text-base;

    @screen md {
        @apply text-lg;
    }
}

.h6 {
    @apply text-base;
}
```

These classes also work on any other element for convenience.

<code-preview heading="Works on any element">
    <p class="h1">h1. Framework heading</p>
    <span class="h2">h2. Framework heading</span>
    <div class="h3">h3. Framework heading</div>
    <strong class="h4">h4. Framework heading</strong>
    <label class="h5 block">h5. Framework heading</label>
    <legend class="h6">h6. Framework heading</legend>
</code-preview>
