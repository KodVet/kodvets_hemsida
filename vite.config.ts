import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type HmrContext } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), staticHMR()]
});

function staticHMR() {
	return {
		name: 'static-hmr',
		enforce: 'post' as const,
		handleHotUpdate(hmrContext: HmrContext): void {
			// match any file in the static directory
			if (hmrContext.file.match('static/.*$')) {
				hmrContext.server.ws.send({
					type: 'full-reload',
					path: '*'
				});
			}
		}
	};
}


