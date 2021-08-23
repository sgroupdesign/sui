import {
    computed,
    defineComponent,
    h,
    inject,
    onMounted,
    provide,
    ref,
    watchEffect,
} from 'vue';

import { useId } from './use-id';

export const Accordion = defineComponent({
    name: 'Accordion',

    setup(_, { slots }) {
        const items = ref([]);
        const activeItemIndex = ref(null);

        const calculateItemIndex = (focus, id) => {
            const index = items.value.findIndex((item) => { return item.id === id; }) ?? 0;

            switch (focus) {
                case 'First':
                    return 0;
                case 'Last':
                    return items.value.length - 1;
                case 'Next':
                    return index !== items.value.length - 1 ? index + 1 : 0;
                case 'Prev':
                    return index !== 0 ? index - 1 : items.value.length - 1;
                default:
                    return 0;
            }
        };

        const api = {
            items,
            activeItemIndex,
            getItemState(id) {
                const item = items.value.find((item) => { return item.id === id; });

                return item ? item.state : 'Closed';
            },
            openItem(id) {
                const item = items.value.find((item) => { return item.id === id; });

                item.state = 'Open';
            },
            closeItem(id) {
                const item = items.value.find((item) => { return item.id === id; });

                item.state = 'Closed';
            },
            goToItem(focus, id) {
                const index = calculateItemIndex(focus, id);

                activeItemIndex.value = index;
            },
            registerItem(item) {
                items.value.push(item);
            },
        };

        provide('AccordionContext', api);

        return () => {
            return h('div', {}, slots.default());
        };
    },
});

export const AccordionItem = defineComponent({
    name: 'AccordionItem',

    setup(_, { slots }) {
        const api = inject('AccordionContext', null);
        const id = `sui-accordion-item-${useId()}`;
        const state = ref('Closed');
        const active = computed(() => {
            return api.getItemState(id) !== null ? api.getItemState(id) === 'Open' : false;
        });

        onMounted(() => {
            api.registerItem({
                id,
                state,
            });
        });

        provide('id', id);
        provide('active', active);

        return () => {
            return h('div', {}, slots.default({
                active: active.value,
            }));
        };
    },
});

export const AccordionButton = defineComponent({
    name: 'AccordionButton',

    setup(_, { slots }) {
        const api = inject('AccordionContext', null);
        const id = inject('id', null);
        const active = inject('active', null);
        const button = ref();

        const activeItem = computed(() => {
            return api.activeItemIndex !== null ? api.items.value[api.activeItemIndex.value]?.id === id : false;
        });

        watchEffect(() => {
            if (!activeItem.value) {
                return;
            }

            button.value.focus();
        });

        const handleKeyUp = (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault();
                    event.stopPropagation();
                    api.goToItem('Prev', id);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    event.stopPropagation();
                    api.goToItem('Next', id);
                    break;
                case 'Home':
                    event.preventDefault();
                    event.stopPropagation();
                    api.goToItem('First');
                    break;
                case 'End':
                    event.preventDefault();
                    event.stopPropagation();
                    api.goToItem('Last');
                    break;
                default:
            }
        };

        return () => {
            return h(
                'button',
                {
                    id: `${id}-button`,
                    ref: button,
                    onClick: () => {
                        active.value ? api.closeItem(id) : api.openItem(id);
                    },
                    onKeyup: handleKeyUp,
                    'aria-controls': `${id}-panel`,
                    'aria-expanded': active.value,
                },
                slots.default(),
            );
        };
    },
});

export const AccordionPanel = defineComponent({
    name: 'AccordionPanel',

    setup(_, { slots }) {
        const api = inject('AccordionContext', null);
        const id = inject('id', null);

        return () => {
            return h(
                'section',
                {
                    id: `${id}-panel`,
                    hidden: api.getItemState(id) === 'Closed',
                    'aria-labelledby': `${id}-button`,
                },
                slots.default(),
            );
        };
    },
});
