# Modal
We use the [@headlessui/vue](https://headlessui.dev/vue/modal) modal components.

## Basic example
Dialogs are built using the `Dialog`, `DialogOverlay`, `DialogTitle` and `DialogDescription` components.

::: warning
Ensure you change the `components` definition to include `Hui` as a prefix, as some component names conflict with native HTML element names and will not work.
:::

```vue
<template>
    <hui-dialog :open="isOpen" @close="setIsOpen">
        <hui-dialog-overlay />

        <hui-dialog-title>Deactivate account</hui-dialog-title>
        
        <hui-dialog-description>
            This will permanently deactivate your account
        </hui-dialog-description>

        <p>Are you sure you want to deactivate your account? All of your data will be
        permanently removed. This action cannot be undone.</p>

        <button @click="setIsOpen(false)">Deactivate</button>
        <button @click="setIsOpen(false)">Cancel</button>
    </hui-dDialog>
</template>

<script>
import { Dialog, DialogOverlay, DialogTitle, DialogDescription } from '@headlessui/vue';

export default {
    components: {
        HuiDialog: Dialog,
        HuiDialogOverlay: DialogOverlay,
        HuiDialogTitle: DialogTitle,
        HuiDialogDescription: DialogDescription,
    },
};

</script>
```

## Further reading
Refer to [@headlessui/vue](https://headlessui.dev/vue/modal) for more examples and documentation.
