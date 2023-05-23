import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@public': path.resolve(__dirname, './public'),
			'@components': path.resolve(__dirname, './src/components')
		}
	},
	server: {
		fs: {
			allow: ['..']
		}
	}
});