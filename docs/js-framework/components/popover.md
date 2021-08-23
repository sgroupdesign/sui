# Popover
We use the [@headlessui/vue](https://headlessui.dev/vue/popover) popover components.

## Basic example
Popovers are built using the `Popover`, `PopoverButton`, and `PopoverPanel` components.

::: warning
Ensure you change the `components` definition to include `Hui` as a prefix, as some component names conflict with native HTML element names and will not work.
:::

```vue
<template>
    <hui-popover class="relative">
        <hui-popover-button>Solutions</hui-popover-button>

        <hui-popover-panel class="absolute z-10">
            <div class="grid grid-cols-2">
                <a href="/analytics">Analytics</a>
                <a href="/engagement">Engagement</a>
                <a href="/security">Security</a>
                <a href="/integrations">Integrations</a>
            </div>

            <img src="/solutions.jpg" alt="" />
        </hui-popover-panel>
    </hui-popover>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';

export default {
    components: {
        HuiPopover: Popover,
        HuiPopoverButton: PopoverButton,
        HuiPopoverPanel: PopoverPanel,
    },
};

</script>
```

## Further reading
Refer to [@headlessui/vue](https://headlessui.dev/vue/popover) for more examples and documentation.
