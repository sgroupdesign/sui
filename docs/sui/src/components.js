import { createApp } from 'vue/dist/vue.esm-bundler.js';

import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

import { Alert } from '@sui/alert';

import MobileNav from '../../../packages/mobile-nav/src/index';


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

    mounted() {
        new MobileNav();
    },
}).mount('#demo-app');
