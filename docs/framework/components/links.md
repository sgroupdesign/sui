# Links
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
