import { createApp } from 'vue/dist/vue.esm-bundler.js';

import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

import { Alert } from '@sui/alert';

import './style.scss';

createApp({
    components: {
        Alert,
    },

    data() {
        return {
            buttonLoadingState: false,
        }
    },

    methods: {
        toggleButtonLoading() {
            this.buttonLoadingState = true;

            setTimeout(() => {
                this.buttonLoadingState = false;
            }, 2000);
        }
    },
}).mount('#demo-app');
