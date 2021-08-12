import { h } from 'vue';

export default {
    //   template: `
    //   <div v-if="isOpen">
    //       <slot></slot>

    //       <button class="btn rounded-md p-1 hover:bg-black hover:bg-opacity-10" @click.prevent="setClose()">
    //           <span class="sr-only">Close alert</span>
    //           <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
    //       </button>
    //   </div>
    // `,

    emits: ['close'],

    data() {
        return {
            isOpen: true,
        };
    },

    methods: {
        setClose() {
            this.isOpen = false;
            this.$emit('close');
        },
    },

    render() {
        return h('div', {}, ['WOOOOOOO.']);
    },
};
