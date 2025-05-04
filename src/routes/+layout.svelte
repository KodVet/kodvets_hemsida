<script lang="ts">
	import Header from '$components/Header.svelte';
	import VariantsNav from '$components/VariantsNav.svelte';
	import { store } from '$lib/store.svelte';
	import { slide } from 'svelte/transition';
	import '../app.css';
	import 'remixicon/fonts/remixicon.css';

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
</script>

<div class="app" onscroll={scrollFunction}>
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<span class="footer-row">
			<span class="copyright">©kodVet {new Date().getFullYear()}</span>
		</span>
		{#if store.showVariantsNav}
			<div transition:slide={{ duration: 2000 }}>
				<VariantsNav />
			</div>
		{/if}
	</footer>
</div>

<style>
	:global(:root) {
		--bg-color: rgb(12, 12, 12);
	}

	:global(*, *:before, *:after) {
		box-sizing: border-box;
	}

	.app {
		background: var(--bg-color);
	}
</style>
