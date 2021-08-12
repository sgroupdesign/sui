import vue from '@vitejs/plugin-vue';
import path from 'path';
import fs from 'fs-extra';

export default ({ command, mode }) => {
    return {
        plugins: [
            vue(),
            {
                name: 'copy',
                async generateBundle() {
                    if (mode === 'production') {
                        this.emitFile({
                            type: 'asset',
                            fileName: 'iframe.js',
                            source: fs.readFileSync('src/iframe.js'),
                        });
                    }
                }
            },
        ],

        build: {
            outDir: '../public',
            assetsDir: '',
            cssCodeSplit: false,
            emptyOutDir: mode === 'production' ? true : false,
            manifest: false,
            sourcemap: false,
            minify: mode === 'production' ? true : false,
            brotliSize: false,
            chunkSizeWarningLimit: false,

            rollupOptions: {
                watch: {
                    include: ['../**/*.md'],
                },
            },

            lib: {
                entry: path.resolve(__dirname, 'src/components.js'),
                name: 'SuiComponents',
                formats: ['es'],
                fileName: format => 'components.js',
            },
        },

        optimizeDeps: {
            include: [
                'vue',
            ],
        },
    };
};