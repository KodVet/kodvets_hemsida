<script lang="ts">
	import Header from '$components/Header.svelte';
	import { page } from '$app/stores';
	import '../app.css';

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
				<span class="copyright">©Kodvet {new Date().getFullYear()}</span>
				<span> <a href="https://www.kogvet.se">Kogvetsektionens</a> webbutskott</span>
			</span>
		</footer>
	{/if}
</div>

<style>
	a {
		color: inherit;
	}

	a:hover {
		text-decoration: none;
	}

	footer {
		background-color: #313131;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: left;
		-ms-flex-pack: left;
		justify-content: left;
	}

	.footer-row {
		padding: 10px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		width: 100%;
		max-width: 428px;
		-ms-flex-pack: distribute;
		justify-content: space-around;
		color: grey;
	}
</style>
