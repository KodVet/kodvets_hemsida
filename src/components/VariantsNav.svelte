<script lang="ts">
	import { page } from '$app/stores';

	const variants = [
		{ id: 'joachim-24-25', name: 'Joachim 24/25' },
		{ id: 'fredrik-24-25', name: 'Fredrik 24/25'},
		{ id: 'bella-24-25', name: 'Bella 24/25'}
	];

	let { variant = '/' } = $derived($page.params);
</script>

{#if variants.length !== 0}
	<nav class="variants-nav">
		<ul>
			<a href="/" class:active={variant === '/'}>Nuvarande</a>
			{#each variants as v}
				<a class:active={variant === v.id} href="/variants/{v.id}">
					{v.name}
				</a>
			{/each}
		</ul>
	</nav>
{/if}

<style>
	.variants-nav {
		background: #f5f5f5;
		padding: 0.5rem;
		border-bottom: 1px solid #ddd;
		width: 100%;
	}

	.variants-nav ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		color: #333;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: background-color 0.2s;
	}

	a:hover {
		background: #e5e5e5;
	}

	a.active {
		background: #007bff;
		color: white;
	}
</style>
