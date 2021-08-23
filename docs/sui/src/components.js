import { createApp } from 'vue/dist/vue.esm-bundler.js';

import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

import { Alert, AlertClose } from '@sui/alert';
import MobileNav from '../../../packages/mobile-nav/src/index';

import './style.scss';

createApp({
    components: {
        SuiAlert: Alert,
        SuiAlertClose: AlertClose,
    },

    data() {
        return {
            // Alert
            alertShownByDefault: true,

            // Button
            buttonLoadingState: false,
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
