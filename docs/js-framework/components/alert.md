# Alert
[`@sgroup/alert`](https://github.com/sgroupdesign/sui/blob/main/packages/alert)

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

<code-preview heading="With close button" :snippet="alertExample1"></code-preview>

<script setup>
const alertExample1 = `
<sui-alert class="rounded-md bg-green-50 p-4" role="alert" v-model:show="alertShownByDefault">
    <div class="flex">
        <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
        </div>

        <div class="ml-3">
            <p class="text-sm font-medium text-green-800">Successfully uploaded</p>
        </div>

        <div class="ml-auto pl-3">
            <div class="-mx-1.5 -my-1.5">
                <sui-alert-close class="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
                    <span class="sr-only">Dismiss</span>
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                </sui-alert-close>
            </div>
        </div>
    </div>
</sui-alert>
`;
</script>

## Installation
To get started, install `@sgroup/alert` via npm:

```sh
npm install @sgroup/alert
```

## Basic example
Alerts are built using the `Alert` and `AlertClose` components.

::: warning
Ensure you change the `components` definition to include `Sui` as a prefix, as some component names conflict with native HTML element names and will not work.
:::

```vue
<template>
    <sui-alert>
        Your changes were made successfully.

        <sui-alert-close>
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
        </sui-alert-close>
    </sui-alert>
</template>

<script>
import { Alert, AlertClose } from '@sgroup/alert';

export default {
    components: {
        SuiAlert: Alert,
        SuiAlertClose: AlertClose,
    },
};

</script>
```

## Component API

### Alert

The main `Alert` component.

| Prop | Type | Default | Description
| - | - | - | -
| `tagName` | `String` | `div` | The element the `Alert` should render as.
| `v-model:show` | `Boolean` | `false` | Whether the `Alert` is shown or not.

### AlertClose

The trigger component that closes an `Alert`.

| Prop | Type | Default | Description
| - | - | - | -
| `tagName` | `String` | `div` | The element the `AlertClose` should render as.

