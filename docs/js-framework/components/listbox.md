# Listbox
We use the [@headlessui/vue](https://headlessui.dev/vue/listbox) listbox components.

## Basic example
Listboxes are built using the `Listbox`, `ListboxButton`, `ListboxOptions`, `ListboxOption` and `ListboxLabel` components.

::: warning
Ensure you change the `components` definition to include `Hui` as a prefix, as some component names conflict with native HTML element names and will not work.
:::

```vue
<template>
    <hui-listbox v-model="selectedPerson">
        <hui-listbox-button>{{ selectedPerson.name }}</hui-listbox-button>
        
        <hui-listbox-options>
            <hui-listbox-option v-for="person in people" :key="person" :value="person" :disabled="person.unavailable">
                {{ person.name }}
            </hui-listbox-option>
        </hui-listbox-options>
    </hui-listbox>
</template>

<script>
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue';

export default {
    components: {
        HuiListbox: Listbox,
        HuiListboxButton: ListboxButton,
        HuiListboxOptions: ListboxOptions,
        HuiListboxOption: ListboxOption,
    },
};

</script>
```

## Further reading
Refer to [@headlessui/vue](https://headlessui.dev/vue/listbox) for more examples and documentation.
