<script lang="ts">
	import { page } from '$app/state';

	const variants = [
		{ id: 'joachim-24-25', name: 'Joachim 24/25' },
		{ id: 'fredrik-24-25', name: 'Fredrik 24/25' },
		{ id: 'bella-24-25', name: 'Bella 24/25' },
		{ id: 'ellen-24-25', name: 'Ellen 24/25' },
		{ id: 'kodvet-21-22', name: 'kodVet 21/22' }
	];

	let { variant = '/' } = $derived(page.params);
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
		background: #1a1a1a;
		padding: 0.75rem 1rem;
		border-bottom: 1px solid #333;
		width: 100%;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
	}

	.variants-nav ul {
		list-style: none;
		padding: 0 1rem;
		margin: 0;
		display: flex;
		gap: 1.25rem;
		flex-wrap: wrap;
	}

	a {
		text-decoration: none;
		color: #b0b0b0;
		padding: 0.6rem 1.2rem;
		border-radius: 6px;
		transition: all 0.2s ease;
		font-weight: 500;
		letter-spacing: 0.02em;
		position: relative;
	}

	a:hover {
		background: rgba(255, 255, 255, 0.08);
		color: #ffffff;
		transform: translateY(-1px);
	}

	a.active {
		background: linear-gradient(135deg, #2563eb, #4f46e5);
		color: white;
		box-shadow: 0 0 12px rgba(79, 70, 229, 0.4);
	}

	a.active::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 20px;
		height: 2px;
		background: rgba(255, 255, 255, 0.7);
		border-radius: 1px;
	}

	@media (max-width: 600px) {
		.variants-nav ul {
			justify-content: center;
		}
	}
</style>
