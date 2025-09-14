<script lang="ts">
	import Header from '$components/Header.svelte';
	import VariantsNav from '$components/VariantsNav.svelte';
	import { store } from '$lib/store.svelte';
	import { slide } from 'svelte/transition';
	import '../app.css';
	import 'remixicon/fonts/remixicon.css';
	import Footer from '$components/Footer.svelte';

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

	<Footer></Footer>
</div>

<style>
	:root {
	}

	:global(:root) {
		--bg-color: rgb(12, 12, 12);
		--offwhite: rgb(250, 250, 250);
		--offblac: rgb(25, 25, 25);
		--kodvet-lila: rgb(65, 6, 97);
		--kodvet-blå: rgb(36, 193, 197);
		--kodvet-inbetween: rgb(51, 100, 148);
	}

	:global(*, *:before, *:after) {
		box-sizing: border-box;
	}

	.app {
		background: var(--bg-color);
	}
</style>
