import { createApp } from 'vue/dist/vue.esm-bundler.js';

import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

import { Alert, AlertClose } from '@sui/alert';
import MobileNav from '../../../packages/mobile-nav/src/index';

// import { Switch, SwitchDescription, SwitchGroup, SwitchLabel } from '@sui/switch'
// import { Menu, MenuButton, MenuItems, MenuItem } from '@sui/menu'
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { Switch, SwitchDescription, SwitchGroup, SwitchLabel } from "@headlessui/vue";
import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue";
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'


import './style.scss';

createApp({
    components: {
        Alert,
        AlertClose,

        SuiSwitch: Switch,
        SuiSwitchDescription: SwitchDescription,
        SuiSwitchGroup: SwitchGroup,
        SuiSwitchLabel: SwitchLabel,

        SuiMenu: Menu,
        SuiMenuButton: MenuButton,
        SuiMenuItems: MenuItems,
        SuiMenuItem: MenuItem,

        SuiListbox: Listbox,
        SuiListboxLabel: ListboxLabel,
        SuiListboxButton: ListboxButton,
        SuiListboxOptions: ListboxOptions,
        SuiListboxOption: ListboxOption,

        SuiRadioGroup: RadioGroup,
        SuiRadioGroupDescription: RadioGroupDescription,
        SuiRadioGroupLabel: RadioGroupLabel,
        SuiRadioGroupOption: RadioGroupOption,
    },

    data() {
        return {
            // Alert
            alertShownByDefault: true,

            // Button
            buttonLoadingState: false,

            // Switch
            enabledSwitch: false,

            // Listbox
            listboxOptions: [
                { name: 'Wade Cooper' },
                { name: 'Arlene Mccoy' },
                { name: 'Devon Webb' },
                { name: 'Tom Cook' },
                { name: 'Tanya Fox' },
                { name: 'Hellen Schmidt' },
            ],
            listboxValue: { name: 'Wade Cooper' },

            // Radio Groups
            radioGroupsOptions: [
                { name: 'Public access', description: 'This project would be available to anyone who has the link' },
                { name: 'Private to Project Members', description: 'Only members of this project would be able to access' },
                { name: 'Private to you', description: 'You are the only one able to access this project' },
            ],
            radioGroupsValue: { name: 'Public access', description: 'This project would be available to anyone who has the link' },
        };
    },

    methods: {
        toggleButtonLoading() {
            this.buttonLoadingState = true;

            setTimeout(() => {
                this.buttonLoadingState = false;
            }, 2000);
        },
    },

    mounted() {
        new MobileNav();
    },
}).mount('#demo-app');
