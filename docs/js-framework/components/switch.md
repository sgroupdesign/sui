# Switch
We use the [@headlessui/vue](https://headlessui.dev/vue/switch) switch components.

## Basic example
Switches are built using the `Switch` component, which takes in a ref via the `v-model` prop. You can toggle your Switch by clicking directly on the component, or by pressing the spacebar while its focused.

::: warning
Ensure you change the `components` definition to include `Hui` as a prefix, as some component names conflict with native HTML element names and will not work.
:::

```vue
<template>
    <hui-switch v-model="enabled" :class="enabled ? 'bg-teal-900' : 'bg-teal-700'" class="relative inline-flex items-center h-6 rounded-full w-11">
        <span class="sr-only">Enable notifications</span>
        <span :class="enabled ? 'translate-x-6' : 'translate-x-1'" class="inline-block w-4 h-4 transform bg-white rounded-full" />
    </hui-switch>
</template>

<script>
import { Switch } from '@headlessui/vue';

export default {
    components: {
        HuiSwitch: Switch,
    },
};

</script>
```

## Further reading
Refer to [@headlessui/vue](https://headlessui.dev/vue/switch) for more examples and documentation.
