# Menu

<code-preview heading="With close button">
    <sui-radio-group v-model="radioGroupsValue">
        <sui-radio-group-label class="sr-only">Privacy setting</sui-radio-group-label>
        
        <div class="bg-white rounded-md -space-y-px">
            <sui-radio-group-option as="template" v-for="(setting, settingIdx) in radioGroupsOptions" :key="setting.name" :value="setting" v-slot="{ checked, active }">
                <div :class="[settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '', settingIdx === radioGroupsOptions.length - 1 ? 'rounded-bl-md rounded-br-md' : '', checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200', 'relative border p-4 flex cursor-pointer focus:outline-none']">
                    <span :class="[checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300', active ? 'ring-2 ring-offset-2 ring-indigo-500' : '', 'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center']" aria-hidden="true">
                        <span class="rounded-full bg-white w-1.5 h-1.5" />
                    </span>
                    
                    <div class="ml-3 flex flex-col">
                        <sui-radio-group-label as="span" :class="[checked ? 'text-indigo-900' : 'text-gray-900', 'block text-sm font-medium']" v-text="setting.name"></sui-radio-group-label>
                        <sui-radio-group-description as="span" :class="[checked ? 'text-indigo-700' : 'text-gray-500', 'block text-sm']" v-text="setting.description"></sui-radio-group-description>
                    </div>
                </div>
            </sui-radio-group-option>
        </div>
    </sui-radio-group>
</code-preview>