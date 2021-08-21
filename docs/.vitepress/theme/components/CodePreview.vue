<template>
    <section :id="kebabCase(heading)" style="margin: 2rem 0;">
        <header class="flex items-center mb-3 whitespace-nowrap">
            <span class="font-medium text-gray-900 truncate">
                <a :href="'#' + kebabCase(heading)" class="mr-1">{{ heading }}</a>
            </span>

            <div class="flex-none flex items-center ml-auto pl-4 sm:pl-6">
                <div class="group p-0.5 rounded-lg flex bg-gray-100 hover:bg-gray-200">
                    <button
                        class="flex focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded-md focus:outline-none focus-visible:ring-offset-gray-100"
                        :tabindex="activeTab === 'preview' ? '0' : '-1'"
                        @click="activeTab = 'preview'"
                        @keydown.arrow-left="activeTab = 'code'"
                        @keydown.arrow-right="activeTab = 'code'"
                    >
                        <span v-if="false" class="p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm font-medium bg-white shadow-sm ring-1 ring-black ring-opacity-5">
                            <!-- eslint-disable-next-line -->
                            <svg width="20" height="20" fill="none" class="lg:mr-2 text-teal-500"><path d="M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><circle cx="10" cy="10" r="2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            <span class="text-gray-900 sr-only lg:not-sr-only">Preview</span>
                        </span>

                        <span class="p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm font-medium" :class="activeTab === 'preview' ? 'bg-white shadow-sm ring-1 ring-black ring-opacity-5' : ''">
                            <!-- eslint-disable-next-line -->
                            <svg width="20" height="20" fill="none" class="lg:mr-2" :class="activeTab === 'preview' ? 'text-teal-500' : 'text-gray-500 group-hover:text-gray-900'"><path d="M17.25 10c0 1-1.75 6.25-7.25 6.25S2.75 11 2.75 10 4.5 3.75 10 3.75 17.25 9 17.25 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <circle cx="10" cy="10" r="2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            <span class="sr-only lg:not-sr-only" :class="activeTab === 'preview' ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'">Preview</span>
                        </span>
                    </button>

                    <button
                        class="ml-0.5 p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm text-gray-600 font-medium focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus:outline-none focus-visible:ring-offset-gray-100"
                        :class="activeTab === 'code' ? 'bg-white shadow-sm ring-1 ring-black ring-opacity-5' : ''"
                        :tabindex="activeTab === 'code' ? '0' : '-1'"
                        @click="activeTab = 'code'"
                        @keydown.arrow-left="activeTab = 'preview'"
                        @keydown.arrow-right="activeTab = 'preview'"
                    >
                        <!-- eslint-disable-next-line -->
                        <svg width="20" height="20" fill="none" class="lg:mr-2" :class="activeTab === 'code' ? 'text-teal-500' : 'text-gray-500 group-hover:text-gray-900'"><path d="M13.75 6.75l3.5 3.25-3.5 3.25M6.25 13.25L2.75 10l3.5-3.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        <span class="sr-only lg:not-sr-only" :class="activeTab === 'code' ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'">Code</span>
                    </button>
                </div>

                <div class="hidden sm:block w-px h-6 bg-gray-200 ml-6"></div>

                <button class="hidden sm:flex sm:items-center sm:justify-center relative w-9 h-9 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 text-gray-400 hover:text-gray-600 group ml-2.5" :style="copied ? 'color:#06B6D4' : ''" @click="onCopyClick()">
                    <span class="sr-only">Copy code</span>

                    <transition
                        enter-from-class="scale-95 translate-y-0.5 opacity-0"
                        enter-active-class="transform ease-out duration-200 transition origin-bottom"
                        enter-to-class="scale-100 translate-y-0 opacity-100"
                        leave-from-class="opacity-100"
                        leave-active-class="transition ease-in duration-100"
                        leave-to-class="opacity-0"
                    >
                        <span v-if="copied" class="absolute inset-x-0 bottom-full mb-2.5 flex justify-center">
                            <span class="bg-gray-900 text-white rounded-md text-[0.625rem] leading-4 tracking-wide font-semibold uppercase py-1 px-3 filter drop-shadow-md">
                                <!-- eslint-disable-next-line -->
                                <svg width="16" height="6" viewBox="0 0 16 6" class="text-gray-900 absolute top-full left-1/2 -mt-px -ml-2"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z" fill="currentColor" /></svg>

                                Copied!
                            </span>
                        </span>
                    </transition>

                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="stroke-current transform group-hover:rotate-[-4deg] transition" :style="copied ? '--tw-rotate:-8deg;' : ''">
                        <path d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.7475 16.2499L18.2475 16.2499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.7475 19.2499L18.2475 19.2499" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <g :class="[copied ? '' : 'opacity-0', initialized ? 'transition-opacity' : '']">
                            <path d="M15.9975 5.99988L15.9975 3.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.9975 5.99988L20.9975 4.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.9975 5.99988L10.9975 4.99988" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                    </svg>
                </button>
            </div>
        </header>

        <div class="relative bg-gray-500 rounded-md ring-2 ring-gray-900 ring-opacity-5 overflow-hidden">
            <div :class="{ 'block': activeTab === 'preview', 'hidden': activeTab !== 'preview' }">
                <div ref="iframeRoot" :style="'max-width: 100%; width: ' + width" class="min-w-full sm:min-w-[392px] relative sm:pr-4">
                    <div class="bg-white">
                        <iframe ref="iframe" :name="uniqueId" class="w-full" :srcdoc="getIframeSource()"></iframe>

                        <div :class="{ 'pointer-events-none': !resizing }" class="absolute opacity-0 inset-0"></div>

                        <div class="sr-only sm:not-sr-only sm:border-l sm:bg-gray-100 sm:absolute sm:right-0 sm:inset-y-0 sm:flex sm:items-center sm:w-4 cursor-[ew-resize]" style="touch-action: none" @pointerdown="onResizeStart($event)">
                            <div class="absolute inset-y-0 -inset-x-2"></div>
                            <svg class="h-4 w-4 text-gray-600 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5h2v14H8zM14 5h2v14h-2z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div :class="{ 'block': activeTab === 'code', 'hidden': activeTab !== 'code' }" class="bg-gray-800">
                <pre :class="{'block': activeSnippet === 'html', 'hidden': activeSnippet !== 'html' }" class="language-html scrollbar-none m-0 p-0 overflow-auto text-white text-sm leading-normal" @copy="onCopy"><code class="inline-block p-4 scrolling-touch subpixel-antialiased" v-html="getCodeBlock('html')"></code></pre>
            </div>
        </div>
    </section>
</template>

<script>
// `lodash-es` doesn't seem to play well with Vitepress build...
import uniqueId from 'lodash/uniqueId';
import kebabCase from 'lodash/kebabCase';
import Prism from 'prismjs';

export default {
    name: 'CodePreview',

    props: {
        heading: {
            type: String,
            default: '',
        },

        bodyId: {
            type: String,
            default: '',
        },

        snippet: {
            type: String,
            default: '',
        },
    },

    data() {
        return {
            activeTab: 'preview',
            copied: false,
            initialized: false,
            resizing: false,
            width: '100%',
            previewHtml: '',
            activeSnippet: 'html',
            snippets: [],
        };
    },

    computed: {
        uniqueId() {
            return uniqueId('frame_');
        },
    },

    created() {
        if (this.$slots.default) {
            let snippet = this.$slots.default()[0].children[0].children;

            // Hack to allow `<script>` in slots, which normally aren't allowed.
            // Show it in code, but not on render.
            this.previewHtml = snippet.replace(/<\\script>((.|\n)*)/gm, '');

            // Also - did you know browsers have an issue with `script` end tags as a string!?
            // eslint-disable-next-line
            snippet = snippet.replace(/<\\script>/gm, '<script>').replace(/<\\\/script>/gm, '<\/script>');

            this.snippets.push({
                language: 'html', snippet,
            });
        }

        // Handle passing in a template. If we can get this working better, probably the preferred approach
        // as opposed to slots, so that the inner code isn't parsed with Vue before it should in the iframe.
        if (this.snippet) {
            this.previewHtml = this.snippet;

            this.snippets.push({
                language: 'html', snippet: this.snippet,
            });
        }
    },

    mounted() {
        this.initialized = true;


        this.setIframeHeight();
    },

    methods: {
        kebabCase(string) {
            return kebabCase(string);
        },

        setTab(tab) {
            this.activeTab = tab;
        },

        getActiveSnippetCode() {
            let code = '';

            const snippet = this.snippets.find(((snippet) => {
                return snippet.language === this.activeSnippet;
            }));

            if (snippet) {
                code = snippet.snippet;
            }

            return code;
        },

        getCodeBlock(language) {
            if (this.activeSnippet !== language) {
                return '';
            }

            if (!this.getActiveSnippetCode()) {
                return '';
            }

            return Prism.highlight(this.getActiveSnippetCode(), Prism.languages.html, 'html');
        },

        setIframeHeight() {
            const { bodyHeight } = this.$refs.iframe.contentWindow;

            if (bodyHeight) {
                this.$refs.iframe.style.height = `${bodyHeight}px`;
            }

            this.$refs.iframe.style.opacity = '1';
            this.$refs.iframe.parentElement.style.height = 'auto';

            window.addEventListener('message', ((e) => {
                const n = e.data;

                if (n.type === 'BODY_HEIGHT' && this.$refs.iframe && n.name === this.$refs.iframe.name) {
                    this.$refs.iframe.style.height = `${n.height}px`;
                }
            }));
        },

        onResizeStart(e) {
            document.documentElement.classList.add('resizing');
            this.resizing = !0;
            this.resizeStartX = e.pageX;
            this.resizeStartWidth = this.$refs.iframeRoot.clientWidth;
            window.addEventListener('pointermove', this.onResize);
            window.addEventListener('pointerup', this.onResizeEnd);
        },

        onResizeEnd() {
            document.documentElement.classList.remove('resizing');
            this.resizing = !1;
            window.removeEventListener('pointermove', this.onResize);
            window.removeEventListener('pointerup', this.onResizeEnd);
            this.$refs.iframeRoot.clientWidth === this.$refs.iframeRoot.parentElement.clientWidth && (this.width = '100%');
        },

        onResize(e) {
            const t = Math.round(this.resizeStartWidth + (e.pageX - this.resizeStartX));
            this.width = ''.concat(Math.max(0, t), 'px');
        },

        onCopy(e) {
            try {
                e.clipboardData.setData('text/plain', document.getSelection().toString()),
                e.preventDefault();
            } catch (e) {
                //
            }
        },

        onCopyClick() {
            const snippet = this.getActiveSnippetCode();

            navigator.clipboard.writeText(snippet).then(() => {
                this.copied = true;

                setTimeout(() => {
                    this.copied = false;
                }, 1500);
            });
        },

        getIframeSource() {
            /* eslint-disable */
            return `<!doctype html>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <link rel="stylesheet" href="/style.css">
            <script src="/components.js" type="module"><\/script>
            <script src="/iframe.js" defer><\/script>
            <body id="${this.bodyId}" class="antialiased font-sans bg-gray-200 overflow-hidden">
                <div id="demo-app" class="bg-white">
                    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div class="mx-auto">${this.previewHtml}</div>
                    </div>
                </div>
            </body>`;
            /* eslint-enable */
        },
    },
};

</script>

<style scoped>

@import '../css/code-preview.css';

</style>
