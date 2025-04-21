<script lang="ts">
	import Header from '$components/Header.svelte';
	import { page } from '$app/stores';
	import '../app.css';
	import VariantsNav from '$components/VariantsNav.svelte';

	let { children } = $props();

	function scrollFunction() {
		// console.log(window.scrollY); // Value of scroll Y in px
		// if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
		// 	document.getElementById('header').style.height = '70px';
		// 	document.getElementById('logo').style.height = '60px';
		// 	document.getElementById('header').style.opacity = 0.9;
		// } else {
		// 	document.getElementById('header').style.height = '120px';
		// 	document.getElementById('logo').style.height = '110px';
		// 	document.getElementById('header').style.opacity = 1;
		// }
	}

	let isVariantRoute = $derived($page.url.pathname.startsWith('/variants/'));
</script>

<div class="app" onscroll={scrollFunction}>
	<Header />

	<main>
		{@render children()}
	</main>

	{#if !isVariantRoute}
		<footer>
			<span class="footer-row">
				<span class="copyright">©kodVet {new Date().getFullYear()}</span>
			</span>
			<VariantsNav />
		</footer>
	{/if}
</div>

<style>
	:global(:root) {
		--bg-color: rgb(12,12,12);
	}

	:global(*, *:before, *:after) {
		box-sizing: border-box;
	}

	.app {
		background: var(--bg-color)
	}
</style>
