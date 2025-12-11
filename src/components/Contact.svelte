<section>
	<div class="box-wrapper" id="contact">
		<div class="ruta1">
			<div class="info">
				<h1>JOINA GÄNGET</h1>
				<p>
					Låter kodVet som något intressant? Kodproffs eller aldrig rört ett tangentbord? Alla är välkomna, här lär vi oss webb tillsammans 🙌🏻 Så om
					webbutveckling eller design låter kul skriv gärna till oss på våra sociala medier om att hänga på våra projekt, eller hoppa med i vår discord!
				</p>

				<div class="socialIcons">
					<a href="https://www.facebook.com/kodvet"><i class="ri-facebook-box-fill"></i></a>
					<a href="https://www.instagram.com/kodvet_liu"><i class="ri-instagram-line"></i></a>
					<a href="https://discord.gg/5HgdNfJVRh"><i class="ri-discord-line"></i></a>
				</div>
			</div>
		</div>
		<div class="ruta2">
			<div class="kontakt-text">
				<h1>HAR DU ETT PROJEKT?</h1>
				<p>Har din förening/företag ett projekt som ni tror att vi kan hjälpa er med? Skriv gärna till oss på mail</p>
			</div>
			<a href="mailto:contact@kodvet.se" class="contact-btn">KONTAKTA OSS</a>
		</div>
	</div>
</section>

<style>
	* {
		box-sizing: border-box;
		list-style: none;
		text-decoration: none;
		font-family: 'Source Code Pro', monospace;
	}

	section {
		display: flex;
		justify-content: center;
		width: 100%;
		padding: 0 20px;
	}

	.box-wrapper {
		display: grid;
		grid-template-columns: 2fr 1fr;
		justify-content: center;
		align-items: stretch;
		background-color: var(--kodvet-lila, #7b68ee);
		border-radius: 25px;
		width: 100%;
		max-width: 1200px;
		min-height: 400px;
		padding: 50px;
		margin-bottom: 50px;
		gap: 30px;
	}

	.ruta1 {
		flex: 1;
		display: flex;
		align-items: center;
		padding: 10px;
		min-width: 0; /* Prevents flex item from overflowing */
	}

	.ruta2 {
		flex: 1;
		min-height: 300px;
		background-color: var(--kodvet-blå, #4169e1);
		border-radius: 25px;
		padding: 30px;
		color: black;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		min-width: 0; /* Prevents flex item from overflowing */
	}

	.kontakt-text {
		width: 100%;
		padding: 0 20px;
	}

	.kontakt-text h1 {
		font-size: clamp(16px, 3vw, 22px);
		font-weight: 600;
		color: var(--text-color, #333);
		text-transform: uppercase;
		letter-spacing: 3px;
		margin-bottom: 20px;
		word-wrap: break-word;
	}

	.kontakt-text p {
		font-size: clamp(14px, 2vw, 16px);
		line-height: 1.5;
		color: var(--text-color, #333);
	}

	.info {
		width: 100%;
	}

	.info h1 {
		font-size: clamp(16px, 3vw, 22px);
		font-weight: 600;
		color: var(--text-color, #fff);
		text-transform: uppercase;
		letter-spacing: 3px;
		margin-bottom: 20px;
		word-wrap: break-word;
	}

	.info p {
		font-size: clamp(14px, 2vw, 16px);
		line-height: 1.6;
		color: var(--text-color, #fff);
		margin-bottom: 30px;
	}

	.contact-btn {
		display: inline-block;
		background-color: #36f8fc;
		color: black;
		font-size: clamp(14px, 2.5vw, 20px);
		padding: 15px 25px;
		border-radius: 10px;
		text-decoration: none;
		transition: all 0.3s ease;
		white-space: nowrap;
		margin-top: 20px;
	}
	.contact-btn:hover {
		transform: scale(1.1);
	}

	.socialIcons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 15px;
		flex-wrap: wrap;
	}

	.socialIcons a {
		text-decoration: none;
		padding: 12px;
		background-color: rgba(255, 255, 255, 0.15);
		border-radius: 50%;
		font-size: clamp(24px, 4vw, 40px);
		color: #fff;
		transition: all 0.15s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.socialIcons a:hover {
		transform: scale(1.1);
	}

	/* Tablet breakpoint */
	@media (max-width: 968px) {
		.box-wrapper {
			padding: 40px;
			gap: 25px;
		}

		.kontakt-text h1,
		.info h1 {
			letter-spacing: 2px;
		}

		.socialIcons a {
			padding: 10px;
		}
	}

	/* Large mobile / small tablet */
	@media (max-width: 768px) {
		.box-wrapper {
			grid-template-columns: auto;
			padding: 30px;
			min-height: auto;
			gap: 20px;
		}

		.ruta1 {
			padding: 0;
		}

		.ruta2 {
			width: 100%;
			min-height: 250px;
			padding: 25px;
		}

		.contact-btn {
			padding: 12px 20px;
		}

		.socialIcons {
			margin-top: 20px;
		}
	}

	/* Mobile breakpoint */
	@media (max-width: 480px) {
		section {
			padding: 0 10px;
		}

		.box-wrapper {
			padding: 20px;
			border-radius: 20px;
			margin-left: 30px;
			margin-right: 30px;
		}

		.ruta2 {
			min-height: 200px;
			padding: 20px;
			border-radius: 20px;
		}

		.kontakt-text {
			padding: 0 10px;
		}

		.kontakt-text h1,
		.info h1 {
			letter-spacing: 1px;
			margin-bottom: 15px;
		}

		.info p,
		.kontakt-text p {
			margin-bottom: 20px;
		}

		.contact-btn {
			padding: 10px 15px;
			margin-top: 15px;
		}

		.socialIcons {
			gap: 10px;
			margin-top: 15px;
		}

		.socialIcons a {
			padding: 8px;
		}
	}

	/* Very small mobile */
	@media (max-width: 360px) {
		.box-wrapper {
			padding: 15px;
		}

		.ruta2 {
			padding: 15px;
			min-height: 180px;
		}

		.kontakt-text h1,
		.info h1 {
			font-size: 14px;
		}

		.contact-btn {
			font-size: 12px;
			padding: 8px 12px;
		}
	}
</style>
