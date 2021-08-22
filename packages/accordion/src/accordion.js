import {
    defineComponent, h, inject, onMounted, provide, ref,
} from 'vue';
import { useId } from './use-id';

export const Accordion = defineComponent({
    name: 'Accordion',

    setup(_, { slots }) {
        const items = ref([]);
        const activeItemIndex = ref(null);

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
            goToFirstItem() {
                const [item] = items.value;

                document.getElementById(`${item.id}-button`).focus();
            },
            goToLastItem() {
                const [item] = [...items.value].reverse();

                document.getElementById(`${item.id}-button`).focus();
            },
            goToNextItem(id) {
                const index = items.value.findIndex((item) => { return item.id === id; });

                if (index === items.value.length - 1) {
                    const [item] = items.value;
                    document.getElementById(`${item.id}-button`).focus();
                    return;
                }

                const item = items.value[index + 1];

                console.log(item);

                document.getElementById(`${item.id}-button`).focus();
            },
            goToPrevItem(id) {
                const index = items.value.findIndex((item) => { return item.id === id; });

                if (index === 0) {
                    const [item] = [...items.value].reverse();
                    document.getElementById(`${item.id}-button`).focus();
                    return;
                }

                const item = items.value[index - 1];
                document.getElementById(`${item.id}-button`).focus();
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

        onMounted(() => {
            api.registerItem({
                id,
                state,
            });
        });

        provide('id', id);

        return () => {
            return h('div', {}, slots.default());
        };
    },
});

export const AccordionButton = defineComponent({
    name: 'AccordionButton',

    setup(_, { slots }) {
        const api = inject('AccordionContext', null);
        const id = inject('id', null);

        const handleKeyUp = (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    api.goToPrevItem(id);
                    break;
                case 'ArrowDown':
                    api.goToNextItem(id);
                    break;
                case 'Home':
                    api.goToFirstItem();
                    break;
                case 'End':
                    api.goToLastItem();
                    break;
                default:
            }
        };

        return () => {
            return h(
                'button',
                {
                    id: `${id}-button`,
                    onClick: () => {
                        api.getItemState(id) === 'Open'
                            ? api.closeItem(id)
                            : api.openItem(id);
                    },
                    onKeyup: handleKeyUp,
                    'aria-controls': `${id}-panel`,
                    'aria-expanded': api.getItemState(id) === 'Open',
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
