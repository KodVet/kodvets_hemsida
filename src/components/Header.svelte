<script lang="ts">
	import { page } from '$app/stores';

	import VariantsNav from '$components/VariantsNav.svelte';

	let isVariantRoute = $derived($page.url.pathname.startsWith('/variants/'));
</script>

<header>
	<VariantsNav />
	{#if !isVariantRoute}
		<nav></nav>
	{/if}
</header>

<style>
</style>
