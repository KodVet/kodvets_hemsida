<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let iframeElement: HTMLIFrameElement | null = $state(null);
	let { variant } = $derived($page.params);
	let iframeSrc = $derived(`/variants/${variant}/index.html`);

	onMount(() => {
		// Handle navigation within the iframe
		window.addEventListener('message', (event) => {
			if (event.source === iframeElement?.contentWindow) {
				const newPath = event.data.path;
				if (newPath) {
					history.pushState(null, '', newPath);
				}
			}
		});
	});
</script>

{#if variant !== '/'}
	<iframe
		bind:this={iframeElement}
		src={iframeSrc}
		title="Site variant"
		class="variant-frame"
		sandbox="allow-same-origin allow-scripts allow-forms"
	></iframe>
{/if}

<style>
	.variant-frame {
		width: 100%;
		height: 100vh;
		border: none;
		margin: 0;
		padding: 0;
	}
</style>
