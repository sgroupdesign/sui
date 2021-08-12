import EslintPlugin from 'vite-plugin-eslint';

export default ({ command }) => ({
    plugins: [
        EslintPlugin({
            cache: false,
            fix: true,
            include: './**/*.{js,vue}',
        }),
    ],
});
