# Tabs
We use the [@headlessui/vue](https://headlessui.dev/vue/tabs) tabs components.

## Basic example
Tabs are built using the `TabGroup`, `TabList`, `Tab`, `TabPanels`, and `TabPanel` components. By default the first tab is selected, and clicking on any tab or selecting it with the keyboard will activate the corresponding panel.

::: warning
Ensure you change the `components` definition to include `Hui` as a prefix, as some component names conflict with native HTML element names and will not work.
:::

```vue
<template>
    <hui-tab-group>
        <hui-tab-list>
            <hui-tab>Tab 1</hui-tab>
            <hui-tab>Tab 2</hui-tab>
            <hui-tab>Tab 3</hui-tab>
        </hui-tab-list>
        
        <hui-tab-panels>
            <hui-tab-panel>Content 1</hui-tab-panel>
            <hui-tab-panel>Content 2</hui-tab-panel>
            <hui-tab-panel>Content 3</hui-tab-panel>
        </hui-tab-panels>
    </hui-tab-group>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';

export default {
    components: {
        HuiTabGroup: TabGroup,
        HuiTabList: TabList,
        HuiTab: Tab,
        HuiTabPanels: TabPanels,
        HuiTabPanel: TabPanel,
    },
};

</script>
```

## Further reading
Refer to [@headlessui/vue](https://headlessui.dev/vue/tabs) for more examples and documentation.
