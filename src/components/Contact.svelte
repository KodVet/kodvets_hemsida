<section>
	<div class="box-wrapper">
		<div class="ruta1">
			<div class="info">
				<h1>Joina gänget!</h1>
				<p>
					Låter kodVet som något intressant? Kodproffs eller aldrig rört ett tangentbord? Alla är välkomna, här lär vi oss webb tillsammans 🙌🏻 Så om
					webbutveckling eller design låter kul skriv gärna till oss på våra sociala medier om att hänga på våra projekt, eller hoppa med i vår discord!
				</p>

				<div class="socialIcons">
					<a href="https://www.facebook.com/kodvet"><i class="ri-facebook-box-fill"></i></a>
					<a href="https://www.instagram.com/webbgruppen_kodvet/"><i class="ri-instagram-line"></i></a>
					<a href="https://discord.gg/5HgdNfJVRh"><i class="ri-discord-line"></i></a>
				</div>
			</div>
		</div>
		<div class="ruta2">
			<div class="kontakt-text">
				<h1>Har du ett projekt?</h1>
				<p1>Har din förening/företag ett projekt som ni tror att vi kan hjälpa er med? Skriv gärna till oss på mail</p1>
			</div>
			<a href="mailto:webbgruppen.kogvet@gmail.com" class="contact-btn">KONTAKTA OSS</a>
		</div>
	</div>
</section>

<style>
	.box-wrapper {
		display: flex;
		justify-content: center;
		background-color: var(--kodvet-lila);
		border-radius: 25px;
		width: 80%;
		height: 400px;
		padding: 50px;
	}
	section {
		display: flex;
		justify-content: center;
	}
	.ruta1 {
		align-items: center;
		padding: 10px;
	}
	.ruta2 {
		width: 150%;
		height: 300px;
		background-color: var(--kodvet-blå);
		border-radius: 25px;
		padding: 20px;
		color: black;
		align-items: center;
		justify-content: space-between;
		display: flex;
		flex-direction: column;
		text-align: left;
	}
	.kontakt-text {
		padding-left: 20px;
		padding-right: 20px;
	}
	.info {
		flex: 1;
		padding-right: 20px;
	}
	.contact-btn {
		margin: 20px;
		display: block;
		background-color: #36f8fc;
		color: black;
		font-size: 20px;
		padding: 15px;
		border-radius: 10px;
		text-decoration: none;
		background-color: 0.3s ease;
		transform: 0.3s ease;
		width: max-content;
	}
	.contact-btn:hover {
		background-color: #1b8f91;
		outline-style: solid;
		outline-color: rgba(255, 255, 255, 0.2);
		transition: 0.3s ease-in-out;
	}
	.socialIcons {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.socialIcons a {
		text-decoration: none;
		padding: 15px;
		background-color: rgba(255, 255, 255, 0.15);
		margin: 20px;
		border-radius: 50%;
		font-size: 40px;
		color: #ffff;
		outline-color: rgba(255, 255, 255, 0);
	}

	.socialIcons a:hover {
		background-color: var(--main-color);
		outline-style: solid;
		outline-color: rgba(255, 255, 255, 0.2);
		transition: 0.3s ease-in-out;
	}
	@media (max-width: 600px) {
		.box-wrapper {
			flex-direction: column;
			scroll-margin-top: 150px;
		}
		.socialIcons {
			max-width: fit-content;
		}
	}
</style>
