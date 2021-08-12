# Breadcrumb
Since breadcrumbs provide a navigation, it’s a good idea to add a meaningful label such as `aria-label="breadcrumb"` to describe the type of navigation provided in the `<nav>` element, as well as applying an `aria-current="page"` to the last item of the set to indicate that it represents the current page.

The dividers are automatically created in the content of the `::before` pseudo-element of `li` tags.

<code-preview heading="Breadcrumbs">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a class="link" href="#">Home</a></li>
            <li class="breadcrumb-item"><a class="link" href="#">Articles</a></li>
            <li class="breadcrumb-item active" aria-current="page">Article Title</li>
        </ol>
    </nav>
</code-preview>

Long breadcrumb items can also automatically collapse into ellipsis `...`.

<code-preview heading="Collapse">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a class="link" href="#">Home</a></li>
            <li class="breadcrumb-item"><a class="link" href="#">This is a particularly long page title to demonstrate</a></li>
            <li class="breadcrumb-item active" aria-current="page">Article Title</li>
        </ol>
    </nav>
</code-preview>

Additionally, breadcrumbs will automatically collapse on mobile.

<code-preview heading="Responsiveness">
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a class="link" href="#">These</a></li>
            <li class="breadcrumb-item"><a class="link" href="#">Links</a></li>
            <li class="breadcrumb-item"><a class="link" href="#">Will</a></li>
            <li class="breadcrumb-item"><a class="link" href="#">Totally</a></li>
            <li class="breadcrumb-item"><a class="link" href="#">Collapse</a></li>
            <li class="breadcrumb-item active" aria-current="page">On mobile</li>
        </ol>
    </nav>
</code-preview>
