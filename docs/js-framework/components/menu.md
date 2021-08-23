# Menu
We use the [@headlessui/vue](https://headlessui.dev/vue/menu) menu components.

## Basic example
Switches are built using the `Switch` component, which takes in a ref via the `v-model` prop. You can toggle your Switch by clicking directly on the component, or by pressing the spacebar while its focused.

::: warning
Ensure you change the `components` definition to include `Hui` as a prefix, as some component names conflict with native HTML element names and will not work.
:::

```vue
<template>
    <hui-menu>
        <hui-menu-button>More</HuiMenuButton>

        <hui-menu-items>
            <hui-menu-item v-slot="{ active }">
                <a :class='{ "bg-blue-500": active }' href="/account-settings">Account settings</a>
            </hui-menu-item>

            <hui-menu-item v-slot="{ active }">
                <a :class='{ "bg-blue-500": active }' href="/account-settings">Documentation</a>
            </hui-menu-item>

            <hui-menu-item disabled>
                <span class="opacity-75">Invite a friend (coming soon!)</span>
            </hui-menu-item>
        </hui-menu-items>
    </hui-menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

export default {
    components: {
        HuiMenu: Menu,
        HuiMenuButton: MenuButton,
        HuiMenuItems: MenuItems,
        HuiMenuItem: MenuItem,
    },
};

</script>
```

## Further reading
Refer to [@headlessui/vue](https://headlessui.dev/vue/menu) for more examples and documentation.
