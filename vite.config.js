import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
							'./source/css/app.css',
							'./source/js/app.js',
						]
        }),
    ],
});
