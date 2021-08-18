import { h } from 'vue';

export const AlertClose = {
    name: 'AlertClose',

    inject: ['alert'],

    props: {
        tagName: {
            type: String,
            default: 'button',
        },
    },

    render() {
        return h(this.tagName, {
            type: 'button',
            onClick: this.alert.hide,
        }, this.$slots.default());
    },
};

export const Alert = {
    name: 'Alert',

    provide() {
        return {
            alert: this,
        };
    },

    props: {
        tagName: {
            type: String,
            default: 'div',
        },

        show: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            proxyShow: this.show,
        };
    },

    emits: ['update:show'],

    render() {
        if (!this.show) {
            return null;
        }

        return h(this.tagName, this.$slots.default());
    },

    watch: {
        proxyShow(value) {
            this.$emit('update:show', value);
        },
    },

    methods: {
        hide() {
            this.proxyShow = false;
        },
    },
};
