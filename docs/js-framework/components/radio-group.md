# Radio Group
We use the [@headlessui/vue](https://headlessui.dev/vue/radio-group) radio group components.

## Basic example
Radio Groups are built using the `RadioGroup`, `RadioGroupLabel`, and `RadioGroupOption` components.

::: warning
Ensure you change the `components` definition to include `Hui` as a prefix, as some component names conflict with native HTML element names and will not work.
:::

```vue
<template>
    <hui-radio-group v-model="plan">
        <hui-radio-group-label>Plan</hui-radio-group-label>
        
        <hui-radio-group-option v-slot="{ checked }" value="startup">
            <span :class="checked ? 'bg-blue-200' : ''">Startup</span>
        </hui-radio-group-option>
        
        <hui-radio-group-option v-slot="{ checked }" value="business">
            <span :class="checked ? 'bg-blue-200' : ''">Business</span>
        </hui-radio-group-option>
        
        <hui-radio-group-option v-slot="{ checked }" value="enterprise">
            <span :class="checked ? 'bg-blue-200' : ''">Enterprise</span>
        </hui-radio-group-option>
    </hui-radio-group>
</template>

<script>
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';

export default {
    components: {
        HuiRadioGroup: RadioGroup,
        HuiRadioGroupLabel: RadioGroupLabel,
        HuiRadioGroupOption: RadioGroupOption,
    },
};

</script>
```

## Further reading
Refer to [@headlessui/vue](https://headlessui.dev/vue/radio-group) for more examples and documentation.
