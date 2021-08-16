import { h } from 'vue';

export default {
    name: 'SuiAlert',

    props: {
        tagName: {
            type: String,
            default: 'div',
        },

        dismissible: {
            type: Boolean,
            default: true,
        },

        show: {
            type: Boolean,
            default: false,
        },

        timeout: {
            type: Number,
            default: undefined,
        },
    },

    data() {
        return {
            proxyShow: this.show,
        };
    },

    render() {
        const $close = this.$slots.close ? this.$slots.close() : [
            h('svg', {
                fill: 'currentColor',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                'aria-hidden': true,
            }, [
                h('path', {
                    'clip-rule': 'evenodd',
                    'fill-rule': 'evenodd',
                    d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                }),
            ]),
        ];

        let $button = [];

        if (this.dismissible) {
            $button = h('button', {
                type: 'button',
                onClick: this.hide,
            }, [$close]);
        }

        return h(this.tagName, [this.$slots.default(), $button]);
    },

    watch: {
        show(show) {
            this.proxyShow = show;
        },

        proxyShow(value) {
            this.$emit('update:show', value);

            if (this.proxyShow) {
                this.$emit('shown');

                if (this.timeout) {
                    this.initTimeout();
                }
            } else {
                this.$emit('hidden');
            }
        },
    },

    mounted() {
        if (this.proxyShow && this.timeout) {
            this.initTimeout();
        }
    },

    methods: {
        initTimeout() {
            setTimeout(() => {
                this.hide();
            }, this.timeout);
        },

        hide() {
            this.proxyShow = false;
        },
    },
};
