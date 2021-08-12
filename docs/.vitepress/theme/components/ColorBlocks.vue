<template>
    <div class="grid grid-cols-1 gap-8 py-4">
        <div v-for="(item, index) in colors" :key="index">
            <div class="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
                <div class="w-32 flex-shrink-0">
                    <div class="h-10 flex flex-col justify-center">
                        <div class="text-sm font-semibold text-gray-900">{{ item.name }}</div>

                        <div>
                            <code class="text-xs text-gray-500">
                                {{ item.handle }}
                            </code>
                        </div>
                    </div>
                </div>

                <div class="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                    <div v-for="(color, swatch) in item.swatches" :key="swatch" class="space-y-1.5">
                        <div class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0" :style="`background-color:${color}`"></div>

                        <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                            <div class="w-6 font-medium text-gray-900">{{ swatch }}</div>
                            <div>{{ color }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            colors: [
                {
                    name: 'Primary',
                    handle: 'colors.primary',
                    swatches: {
                        50: '#DEE1F7',
                        100: '#C4C8F1',
                        200: '#A9B0EB',
                        300: '#8F98E5',
                        400: '#747FDE',
                        500: '#5A67D8',
                        600: '#4852AD',
                        700: '#363E82',
                        800: '#242956',
                        900: '#12152B',
                    },
                },

                {
                    name: 'Secondary',
                    handle: 'colors.secondary',
                    swatches: {
                        50: '#FDFEFE',
                        100: '#D4E9E9',
                        200: '#ABD5D4',
                        300: '#83C0BF',
                        400: '#5AACAA',
                        500: '#319795',
                        600: '#277978',
                        700: '#1E5B5A',
                        800: '#143D3D',
                        900: '#0A1F1F',
                    },
                },
            ],
        };
    },
};

</script>

<style scoped>

code {background: none;
    padding: 0;}
.ring-1,.ring-inset{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,0.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;}
.flex{display:flex;}
.grid{display:grid;}
.h-10{height:2.5rem;}
.w-full{width:100%;}
.w-32{width:8rem;}
.w-6{width:1.5rem;}
.min-w-0{min-width:0;}
.flex-1{flex:1 1 0%;}
.flex-shrink-0{flex-shrink:0;}
.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr));}
.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr));}
.gap-8{gap:2rem;}
.flex-col{flex-direction:column;}
.justify-center{justify-content:center;}
.gap-x-4{column-gap:1rem;}
.gap-y-3{row-gap:.75rem;}
.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse));}
.space-y-1\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.375rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem * var(--tw-space-y-reverse));}
.rounded{border-radius:.25rem;}
.px-0\.5{padding-left:.125rem;padding-right:.125rem;}
.py-4{padding-top:1rem;padding-bottom:1rem;}
.text-sm{font-size:.875rem;line-height:1.25rem;}
.text-xs{font-size:.75rem;line-height:1rem;}
.font-medium{font-weight:500;}
.font-semibold{font-weight:600;}
.text-gray-500{--tw-text-opacity:1;color:rgba(107,114,128,var(--tw-text-opacity));}
.text-gray-900{--tw-text-opacity:1;color:rgba(17,24,39,var(--tw-text-opacity));}
.ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);}
.ring-1{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent);}
.ring-inset{--tw-ring-inset:inset;}
.ring-black{--tw-ring-opacity:1;--tw-ring-color:rgba(0,0,0,var(--tw-ring-opacity));}
.ring-opacity-0{--tw-ring-opacity:0;}
@media (min-width:640px){
.sm\:flex-row{flex-direction:row;}
.sm\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0px * var(--tw-space-y-reverse));}
.sm\:space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)));}
}
@media (min-width:768px){
.md\:flex{display:flex;}
.md\:justify-between{justify-content:space-between;}
.md\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)));}
}
@media (min-width:1536px){
.\32xl\:block{display:block;}
.\32xl\:grid-cols-10{grid-template-columns:repeat(10,minmax(0,1fr));}
.\32xl\:gap-x-2{column-gap:.5rem;}
.\32xl\:space-x-0>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0px * var(--tw-space-x-reverse));margin-left:calc(0px * calc(1 - var(--tw-space-x-reverse)));}
}

</style>
