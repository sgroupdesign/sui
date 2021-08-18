# Switch

<code-preview heading="With close button">
    <sui-switch v-model="enabledSwitch" :class="enabledSwitch ? 'bg-teal-900' : 'bg-teal-700'" class="relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        <span class="sr-only">Use setting</span>
        <span aria-hidden="true" :class="enabledSwitch ? 'translate-x-9' : 'translate-x-0'" class="pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200" />
    </sui-switch>
</code-preview>