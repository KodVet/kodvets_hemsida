<script lang="ts">
	let { children } = $props();
</script>

<div class="variants-container">
	<main>
		{@render children()}
	</main>
</div>

<style>
	.variants-container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		overflow: hidden;
	}

	main {
		flex: 1;
		overflow: hidden;
	}
</style>
