# Menu

<code-preview body-id="listbox-example" heading="With close button">
    <sui-listbox as="div" v-model="listboxValue">
        <sui-listbox-label class="block text-sm font-medium text-gray-700">Assigned to</sui-listbox-label>
        
        <div class="mt-1 relative">
            <sui-listbox-button class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <span class="block truncate" v-html="listboxValue.name"></span>
                <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"></span>
            </sui-listbox-button>

            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <sui-listbox-options class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <sui-listbox-option as="template" v-for="person in listboxOptions" :key="person.id" :value="person" v-slot="{ active, selected }">
                        <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                            <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']" v-html="person.name"></span>

                            <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']"></span>
                        </li>
                    </sui-listbox-option>
                </sui-listbox-options>
            </transition>
        </div>
    </sui-listbox>
</code-preview>