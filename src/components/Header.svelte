<script lang="ts">
	import { page } from '$app/stores';
	import VariantsNav from '$components/VariantsNav.svelte';
	import { scrollY } from 'svelte/reactivity/window';

	let isVariantRoute = $derived($page.url.pathname.startsWith('/variants/'));
	let isVisible = $state(true);
	let lastScrollY = $state(0);
	let headerElement: HTMLElement;
	let isMobileMenuOpen = $state(false);
	let isLinkClick = $state(false);

	const navLinks = [
		{ href: '#hero', label: 'Hem' },
		{ href: '#about', label: 'Om oss' },
		{ href: '#projects', label: 'Projekt' },
		{ href: '#contact', label: 'Kontakt' }
	];

	function handleScroll() {
		if (scrollY.current) {
			// Only hide header on manual scroll, not on link clicks
			if (!isLinkClick) {
				// Show/hide based on scroll direction
				if (scrollY.current > lastScrollY && scrollY.current > 100) {
					// Scrolling down & past threshold - hide
					isVisible = false;
				} else {
					isVisible = true;
				}
			} else {
				setTimeout(() => {
					isLinkClick = false;
				}, 1000);
			}

			lastScrollY = scrollY.current;
		}
	}

	function handleLinkClick() {
		isLinkClick = true;
		isVisible = true;
		closeMenu();
	}

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMenu() {
		isMobileMenuOpen = false;
	}
</script>

<svelte:window onscroll={handleScroll} />

<header bind:this={headerElement}>
	<div class="header-wrapper" class:visible={isVisible}>
		{#if !isVariantRoute}
			<nav class="main-nav">
				<div class="nav-container">
					<div class="logo">
						<a href="#hero"><img src="/images/kodvet_logo_vit_liggande.png" alt="" /></a>
					</div>
					<div class="nav-links">
						{#each navLinks as link}
							<a href={link.href} onclick={handleLinkClick}>{link.label}</a>
						{/each}
					</div>
					<button
						class="mobile-menu-toggle"
						class:active={isMobileMenuOpen}
						onclick={toggleMobileMenu}
						aria-label="Toggle menu"
						type="button"
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>

				<!-- Mobile menu overlay -->
				<div class="mobile-menu" class:active={isMobileMenuOpen}>
					<button class="close-button" onclick={closeMenu} aria-label="Close menu">
						<span></span>
						<span></span>
					</button>
					<div class="mobile-menu-links">
						{#each navLinks as link}
							<a href={link.href} onclick={handleLinkClick}>{link.label}</a>
						{/each}
					</div>
				</div>
			</nav>
		{/if}
	</div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
	}

	.header-wrapper {
		width: 100%;
		transition: transform 0.3s ease;
		transform: translateY(-100%);
	}

	.header-wrapper.visible {
		transform: translateY(0);
	}

	.main-nav {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		padding: 0.6rem 2rem;
		color: white;
		position: relative;
	}

	.nav-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
	}

	.logo {
		width: 120px;
	}

	.logo img {
		max-width: 100%;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
	}

	.nav-links a {
		text-decoration: none;
		color: white;
		font-weight: 500;
		transition: color 0.2s ease;
		position: relative;
	}

	.nav-links a:hover {
		color: rgba(255, 255, 255, 0.8);
	}

	.nav-links a::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 0;
		height: 2px;
		background-color: white;
		transition: width 0.2s ease;
	}

	.nav-links a:hover::after {
		width: 100%;
	}

	/* Mobile menu toggle button */
	.mobile-menu-toggle {
		display: none;
		flex-direction: column;
		gap: 5px;
		cursor: pointer;
		background: transparent;
		border: none;
		padding: 5px;
	}

	.mobile-menu-toggle span {
		width: 25px;
		height: 2px;
		background-color: white;
		transition: all 0.3s ease;
		display: block;
	}

	/* Mobile menu toggle animation */
	.mobile-menu-toggle.active span:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}

	.mobile-menu-toggle.active span:nth-child(2) {
		opacity: 0;
	}

	.mobile-menu-toggle.active span:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	/* Close button for mobile menu */
	.close-button {
		position: absolute;
		top: 20px;
		right: 20px;
		width: 40px;
		height: 40px;
		background: transparent;
		border: none;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.close-button span {
		position: absolute;
		width: 30px;
		height: 2px;
		background-color: white;
		transition: all 0.3s ease;
	}

	.close-button span:first-child {
		transform: rotate(45deg);
	}

	.close-button span:last-child {
		transform: rotate(-45deg);
	}

	.close-button:hover span {
		background-color: rgba(255, 255, 255, 0.8);
	}

	/* Mobile menu overlay */
	.mobile-menu {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.9);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		display: flex;
		justify-content: center;
		align-items: center;
		transition:
			opacity 0.3s ease,
			visibility 0.3s ease;
		opacity: 0;
		visibility: hidden;
		z-index: 999;
	}

	.mobile-menu.active {
		opacity: 1;
		visibility: visible;
	}

	.mobile-menu-links {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.mobile-menu-links a {
		text-decoration: none;
		color: white;
		font-size: 1.5rem;
		font-weight: 500;
		transition: color 0.2s ease;
	}

	.mobile-menu-links a:hover {
		color: rgba(255, 255, 255, 0.8);
	}

	@media (max-width: 768px) {
		.nav-links {
			display: none;
		}

		.mobile-menu-toggle {
			display: flex;
		}
	}
</style>
