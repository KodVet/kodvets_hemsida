<script>
	import { store } from '$lib/store.svelte';
</script>

<footer>
	<section class="footerContainer">
		<div class="socialIcons">
			<a class="loggafoot" href="https://www.facebook.com/kodvet"
				><i class="ri-facebook-box-fill"></i></a
			>
			<a class="loggafoot" href="https://www.instagram.com/webbgruppen_kodvet/"
				><i class="ri-instagram-line"></i></a
			>
			<a href="#hero">
				<img
					class="svart-logo"
					src="images/kodvet_logo_vit_symbol.png"
					alt="Logotyp"
					height="80px"
				/>
			</a>
			<a class="loggafoot" href="https://discord.gg/5HgdNfJVRh"><i class="ri-discord-line"></i></a>
			<a class="loggafoot" href="mailto:webbgruppen.kogvet@gmail.com"
				><i class="ri-mail-line"></i></a
			>
		</div>
		<div>
			<ul class="footerNav">
				<li><a href="#hero">Hem</a></li>
				<li><a href="#about">Om Oss</a></li>
				<li><a href="#projects">Projekt</a></li>
				<li><a href="#contact">Kontakt</a></li>
				<li>
					<a class="rainbow" onclick={() => (store.showVariantsNav = !store.showVariantsNav)}
						>Varianter</a
					>
				</li>
			</ul>
		</div>
	</section>
</footer>

<style>
	* {
		padding: 0;
		margin: 0;

		box-sizing: border-box;
		list-style: none;
		text-decoration: none;
		font-family: 'Source Code Pro', monospace;
	}
	footer {
		flex: 1 1 50px;
	}
	.footerContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 20px;
	}
	.socialIcons {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.socialIcons .loggafoot {
		text-decoration: none;
		padding: 10px;
		background-color: #fff;
		margin: 10px;
		border-radius: 50%;
		font-size: 20px;
		color: #000;
	}

	.socialIcons .loggafoot:hover {
		background-color: grey;
		transition: 0.5s;
	}
	.socialIcons a li {
		font-size: 5rem;
		color: black;
		opacity: 0.9;
		transition: transfrom 0.5s ease;
	}

	.footerNav {
		margin: 30px 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.footerNav ul {
		display: flex;
		gap: 20px;
		padding: 0;
		justify-content: center;
	}

	.footerNav ul li {
		margin: 0;
	}

	.footerNav a {
		display: flex;
		align-items: center;
		color: white;
		text-decoration: none;
		font-size: 1rem;
		font-family: var(--p-font);
		margin: -20px 15px;
		opacity: 0.7;
		transition:
			opacity 0.5s ease,
			transform 0.3s ease;
	}

	.footerNav a:hover {
		color: grey;
	}

	.footerNav ul li a:hover {
		opacity: 1;
		transform: translateY(-4px);
	}

	.footerNav p {
		text-align: center;
		width: 100%;
	}

	.svart-logo {
		margin: 10px;
	}
	.rainbow {
		background: linear-gradient(
			to right,
			#ef5350,
			#f48fb1,
			#7e57c2,
			#2196f3,
			#26c6da,
			#43a047,
			#eeff41,
			#f9a825,
			#ff5722
		);
		cursor: help;
	}
</style>
