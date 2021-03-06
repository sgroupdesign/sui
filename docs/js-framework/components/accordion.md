# Accordion
[`@sgroup/accordion`](https://github.com/sgroupdesign/sui/blob/main/packages/accordion)

Show and hide content in collapsable containers.

<code-preview heading="Accordion">
    <sui-accordion>
        <sui-accordion-item v-slot="{ active }">
            <sui-accordion-button class="flex justify-between w-full px-3 py-2 my-2 font-medium text-sm rounded-md hover:text-gray-700" :class="[active ? 'bg-gray-200 text-gray-700' : 'bg-gray-100 text-gray-500']">
                <h3>Item 1</h3>

                <span class="icon w-6 h-6" :class="active ? 'transform rotate-180' : ''">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                </span>
            </sui-accordion-button>

            <sui-accordion-panel class="richtext px-4 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </sui-accordion-panel>
        </sui-accordion-item>
    </sui-accordion>
</code-preview>

## Installation
To get started, install `@sgroup/accordion` via npm:

```sh
npm install @sgroup/accordion
```

## Basic example
Accordions are built using the `Accordion`, `AccordionItem`, `AccordionButton` and `AccordionPanel` components.

::: warning
Ensure you change the `components` definition to include `Sui` as a prefix, as some component names conflict with native HTML element names and will not work.
:::

```vue
<template>
    <sui-accordion>
        <sui-accordion-item>
            <sui-accordion-button>Item</sui-accordion-button>
            
            <sui-accordion-panel>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rerum
                blanditiis, et ex maxime quod repudiandae eveniet unde repellendus
                magnam? Debitis commodi culpa ab. Incidunt explicabo animi
                exercitationem impedit hic?</p>
            </sui-accordion-panel>
        </sui-accordion-item>
    </sui-accordion>
</template>

<script>
import { Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@sgroup/accordion';

export default {
    components: {
        SuiAccordion: Accordion,
        SuiAccordionItem: AccordionItem,
        SuiAccordionButton: AccordionButton,
        SuiAccordionPanel: AccordionPanel,
    },
};

</script>
```

## Component API

### Accordion
The main `Accordion` component.

| Prop | Type | Default | Description
| - | - | - | -
| `tagName` | `String` | `div` | The element the `Accordion` should render as.


### AccordionItem
An individual, collapsable item in the `Accordion`.

| Prop | Type | Default | Description
| - | - | - | -
| `tagName` | `String` | `div` | The element the `AccordionItem` should render as.

| Slot Prop | Type | Description
| - | - | -
| `active` | `Boolean` | Whether or not the accordion item is open.


### AccordionButton
The trigger component that toggles an `AccordionItem`.

| Prop | Type | Default | Description
| - | - | - | -
| `tagName` | `String` | `button` | The element the `AccordionButton` should render as.


### AccordionPanel
This component contains the contents of your `AccordionItem`.

| Prop | Type | Default | Description
| - | - | - | -
| `tagName` | `String` | `section` | The element the `AccordionItem` should render as.

