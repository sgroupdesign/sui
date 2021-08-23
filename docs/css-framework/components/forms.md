# Forms
[`@sgroup/tailwind-plugins/forms`](https://github.com/sgroupdesign/sui/blob/main/packages/tailwind-plugins/src/forms)

We use [tailwindcss-forms](https://github.com/tailwindlabs/tailwindcss-forms) as a reset for form styling. This give you a good head-start for styling forms forms from a non-opinionated base.

<code-preview body-id="forms-example" heading="Unstyled forms">
    <div class="grid grid-cols-1 gap-6">
        <label class="block">
            <span class="text-gray-700">Full name</span>
            <input type="text" class="mt-1 block w-full" placeholder="">
        </label>
        
        <label class="block">
            <span class="text-gray-700">Email address</span>
            <input type="email" class="mt-1 block w-full" placeholder="john@example.com">
        </label>
        
        <label class="block">
            <span class="text-gray-700">When is your event?</span>
            <input type="date" class="mt-1 block w-full">
        </label>

        <label class="block">
            <span class="text-gray-700">What type of event is it?</span>
            
            <select class="block w-full mt-1">
                <option>Corporate event</option>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Other</option>
            </select>
        </label>

        <label class="block">
            <span class="text-gray-700">Additional details</span>
            <textarea class="mt-1 block w-full" rows="3"></textarea>
        </label>

        <div class="block">
            <div class="mt-2">
                <div>
                    <label class="inline-flex items-center">
                        <input type="checkbox" checked="">
                        <span class="ml-2">Email me news and special offers</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</code-preview>

When you want custom styling for your forms, you can use a collection of `.form-*` classes.

## Form label
Across the board, use the `.form-label` class for styling the label of a form control.

<code-preview body-id="forms-example" heading="Form label">
    <div class="mb-3">
        <label class="form-label" for="input-example-1">Text</label>
        <input class="form-control" id="input-example-1" placeholder="Text" type="text">
    </div>
</code-preview>

## Form text
Form text should be explicitly associated with the form control it relates to using the `aria-describedby` attribute. This will ensure that assistive technologies—such as screen readers—will announce this form text when the user focuses or enters the control.

<code-preview body-id="forms-example" heading="Form text">
    <label for="inputPassword5" class="form-label">Password</label>
    <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
    <div id="passwordHelpBlock" class="form-text">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</div>
</code-preview>

## Inputs
Use the `.form-control` class on any input.

<code-preview body-id="forms-example" heading="Form inputs">
    <div class="mb-3">
        <label class="form-label" for="input-example-1">Text</label>
        <input class="form-control" id="input-example-1" placeholder="Text" type="text">
    </div>

    <div class="mb-3">
        <label class="form-label" for="input-example-8">Email</label>
        <input class="form-control" id="input-example-8" placeholder="Email" type="email">
    </div>

    <div class="mb-3">
        <label class="form-label" for="input-example-9">URL</label>
        <input class="form-control" id="input-example-9" placeholder="URL" type="url">
    </div>
    
    <div class="mb-3">
        <label class="form-label" for="input-example-10">Search</label>
        <input class="form-control" id="input-example-10" placeholder="Search" type="search">
    </div>
    
    <div class="mb-3">
        <label class="form-label" for="input-example-11">Tel</label>
        <input class="form-control" id="input-example-11" placeholder="Tel" type="tel">
    </div>
    
    <div class="mb-3">
        <label class="form-label" for="input-example-12">Password</label>
        <input class="form-control" id="input-example-12" placeholder="Password" type="password">
    </div>
    
    <div class="mb-3">
        <label class="form-label" for="input-example-13">Number</label>
        <input class="form-control" id="input-example-13" placeholder="00" type="number">
    </div>
    
    <div class="mb-3">
        <label class="form-label" for="input-example-14">Date</label>
        <input class="form-control" id="input-example-14" type="date">
    </div>
</code-preview>

<code-preview body-id="forms-example" heading="File input">
    <div class="mb-3">
        <label for="formFile" class="form-label">Default file input example</label>
        <input class="form-control" type="file" id="formFile">
    </div>
</code-preview>

<code-preview body-id="forms-example" heading="Color input">
    <div class="mb-3">
        <label for="exampleColorInput" class="form-label">Color picker</label>
        <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color">
    </div>
</code-preview>

### Disabled
Add the `disabled` attribute on an input to give it a grayed out appearance and remove pointer events.

<code-preview body-id="forms-example" heading="Disabled">
    <div class="mb-3">
        <input class="form-control" type="text" placeholder="Disabled input" disabled>
    </div>
</code-preview>

### Readonly
Add the `readonly` attribute on an input to prevent modification of the input’s value.

<code-preview body-id="forms-example" heading="Readonly">
    <div class="mb-3">
        <input class="form-control" type="text" value="Readonly input" readonly>
    </div>
</code-preview>

## Textarea

<code-preview body-id="forms-example" heading="Form textarea">
    <div class="mb-3">
        <label class="form-label" for="input-example-3">Message</label> 
        <textarea class="form-control" id="input-example-3" placeholder="Textarea" rows="3"></textarea>
    </div>
</code-preview>

## Select
Custom `<select>` menus need only a custom class, `.form-select` to trigger the custom styles. Custom styles are limited to the `<select>`’s initial appearance and cannot modify the `<option>`s due to browser limitations.

<code-preview body-id="forms-example" heading="Form selects">
    <div class="mb-3">
        <select class="form-select">
            <option>Choose an option</option>
            <option>Slack</option>
            <option>Skype</option>
            <option>Hipchat</option>
        </select>
    </div>

    <div class="mb-3">
        <select class="form-select" multiple>
            <option>Choose an option</option>
            <option>Slack</option>
            <option>Skype</option>
            <option>Hipchat</option>
        </select>
    </div>
</code-preview>

## Checkbox
Use the `.form-check-input` and `.form-check-label` for both radio and checkbox inputs.

<code-preview body-id="forms-example" heading="Form checkbox">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">Default checkbox</label>
    </div>
    
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
        <label class="form-check-label" for="flexCheckChecked">Checked checkbox</label>
    </div>
</code-preview>

## Radio

<code-preview body-id="forms-example" heading="Form radio">
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">Default radio</label>
    </div>
    
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
        <label class="form-check-label" for="flexRadioDefault2">Default checked radio</label>
    </div>
</code-preview>

### Inline
Group checkboxes or radios on the same horizontal row by adding `.form-check-inline` to any `.form-check`.

<code-preview body-id="forms-example" heading="Inline checkbox and radio">
    <div class="mb-3">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">1</label>
        </div>

        <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
            <label class="form-check-label" for="inlineCheckbox2">2</label>
        </div>
    </div>

    <div class="mb-3">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">1</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio2">2</label>
        </div>
    </div>
</code-preview>

## Floating labels
Wrap a pair of `<input class="form-control">` and `<label>` elements in `.form-floating` to enable floating labels. A placeholder is required on each `<input>` as our method of CSS-only floating labels uses the `:placeholder-shown` pseudo-element. Also note that the `<input>` must come first so we can utilize a sibling selector (e.g., `~`).

<code-preview body-id="forms-example" heading="Floating label">
    <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
    </div>

    <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
    </div>
</code-preview>

When there’s a value already defined, `<label>`s will automatically adjust to their floated position.

<code-preview body-id="forms-example" heading="Floating label with an existing value">
    <form class="form-floating">
        <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com">
        <label for="floatingInputValue">Input with value</label>
    </form>
</code-preview>

### Textareas
By default, `<textarea>`s with `.form-control` will be the same height as `<input>`s.

<code-preview body-id="forms-example" heading="Floating label textarea">
    <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Comments</label>
    </div>
</code-preview>

To set a custom height on your `<textarea>`, do not use the `rows` attribute. Instead, set an explicit `height` (either inline or via custom CSS).

<code-preview body-id="forms-example" heading="Floating label textarea height">
    <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2">Comments</label>
    </div>
</code-preview>

### Selects
Other than `.form-control`, floating labels are only available on `.form-select`s. They work in the same way, but unlike `<input>`s, they’ll always show the `<label>` in its floated state. Selects with `size` and `multiple` are not supported.

<code-preview body-id="forms-example" heading="Floating label select">
    <div class="form-floating">
        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>

        <label for="floatingSelect">Works with selects</label>
    </div>
</code-preview>


### Configuration
Configure the `@sgroup/tailwind-plugins/forms` plugin using `theme` options.

```js
theme: {
    extend: {
        forms: (theme) => {
            return {
                // BASE STYLES
                // Set the primary colour for form-focus border/ring and the checked state for checkboxes and radios.
                // This is applicable to the base (whether you use the form classes or not).
                primaryColor: theme('colors.red.500'),

                // COMPONENT STYLES
                // Styles for form labels
                label: {
                    marginBottom: theme('margin.4'),
                    fontWeight: theme('fontWeight.bold'),
                },

                // Styles for form text
                text: {
                    fontSize: theme('fontSize.xs'),
                },

                // Styles for form inputs and selects
                control: {
                    padding: `theme('padding.6') theme('padding.4')`,
                },

                // Styles for form checkboxes and radios
                check: {
                    paddingLeft: theme('padding.6'),
                },

                // Styles for form checkboxes and radios inputs
                checkInput: {
                    // Change for just checkboxes
                    '&[type=checkbox]': {
                        borderRadius: theme('borderRadius.DEFAULT'),
                    },

                    // Change for just radios
                    '&[type=radio]': {
                        borderRadius: theme('borderRadius.full'),
                    },
                },

                // Styles for floating labels
                formFloating: {

                },
            };
        },
    },
},
```