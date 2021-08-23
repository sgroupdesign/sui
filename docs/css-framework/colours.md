# Colours
We use all colours as provided by Tailwind's [extended color classes](https://tailwindcss.com/docs/customizing-colors#color-palette-reference), with the addition of a few brand-related colours. Be sure to use these colours as a first-point, and refrain from overriding them.

For example, **do not** change the `green` colour defined by Tailwind to one you need to match the brand. Instead, you should use our additional brand-related classes below. Only override the default Tailwind classes if you know what you're doing. There's been considerable work from the Tailwind team to ensure these colours [look right](https://blog.tailwindcss.com/tailwindcss-v2#all-new-color-palette).

We provide `primary` and `secondary` colour classes, typically used for brand colours. You can also add your own colours to the `tailwind.config.js` file. They should always follow a 50-900 scale (lightest to darkest) with 500 being the "true" colour. Check out the [Colour Scale Generator](https://hihayk.github.io/scale/#4/5/80/80/0/0/0/-0/5A67D8/90/103/216/white).

<color-blocks />
