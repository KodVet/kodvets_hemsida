<!--
<section>
	<div class="contactpic">
		<img id="blob" src="./images/Group_2_1.png" alt="Bakgrundsbild" />
		<div class="left_div">
			<a class="logga" href="https://discord.gg/5HgdNfJVRh">
				<i class="ri-discord-line"></i>
			</a>
		</div>

		<div class="right_div">
			<div class="contact-text">Har du en idé för en app? Hör av dig 😎</div>
			<a href="https://www.facebook.com/kodvet" class="new_contact-btn">KONTAKTA OSS</a>
		</div>
	</div>
</section>
-->
<section>
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
		<div class="ruta2">
			<h1>Har du ett projekt?</h1>
			<p1>Har din förening/företag ett projekt som ni tror att vi kan hjälpa er med? Skriv gärna till oss på mail</p1>
			<a href="mailto:webbgruppen.kogvet@gmail.com" class="contact-btn">KONTAKTA OSS</a>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
	}
	.ruta1 {
		background-color: #420360;
		width: 80%;
		height: 400px;
		border-radius: 25px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 40px;
	}
	.info {
		flex: 1;
		padding-right: 20px;
	}
	.ruta2 {
		width: 40%;
		height: 300px;
		background-color: #24c3c6;
		border-radius: 25px;
		padding: 20px;
		color: black;
		align-items: center;
		justify-content: space-between;
		display: flex;
		flex-direction: column;
		text-align: left;
	}
	.contact-btn {
		margin: 20px;
		display: block;
		background-color: #1b8f91;
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
		background-color: #36f8fc;
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
	.socialIcons a li {
		font-size: 5rem;
		color: black;
		opacity: 0.9;
		transition: transfrom 0.5s ease;
	}
	.contactpic {
		display: flex;
		position: relative;
		justify-content: space-between;
		align-items: center;
		max-width: 860px;
		margin: 0 120px;
	}
	#blob {
		width: 100%;
	}

	.left_div,
	.right_div {
		position: absolute;
	}
	#left-blob {
		width: 60%;
	}

	#right-blob {
		width: 160%;
	}

	.left_div {
		top: 52%;
		left: 19%;
	}

	.right_div {
		display: flex;
		flex-flow: column;
		align-items: center;
		gap: 10px;
		max-width: 35%;
		left: 50%;
		font-size: 1.4cqw;
	}

	.new_contact-btn {
		margin-top: 20px;
		display: inline-block;
		background-color: rgba(255, 255, 255, 0.15);
		background-color: rgba(255, 255, 255, 0.15);
		color: white;
		font-size: 16px;
		padding: 15px 30px;
		border-radius: 8px;
		text-decoration: none;
		background-color: 0.3s ease;
		transform: 0.3s ease;
	}

	.new_contact-btn p {
		text-align: center;
		vertical-align: middle;
	}

	.new_contact-btn:hover {
		background-color: var(--main-color);
		outline-style: solid;
		outline-color: rgba(255, 255, 255, 0.2);
		transition: 0.3s ease-in-out;
		background-color: var(--main-color);
		outline-style: solid;
		outline-color: rgba(255, 255, 255, 0.2);
		transition: 0.3s ease-in-out;
	}

	.logga {
		display: flex;
		padding: 15px;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.15);
		border-radius: 50%;
		font-size: 25px;
		color: white;
		outline-color: rgba(255, 255, 255, 0);
		text-decoration: none;
	}

	.discordlogga:hover {
		background-color: var(--main-color);
		outline-style: solid;
		outline-color: rgba(255, 255, 255, 0.2);
		transition: 0.3s ease-in-out;
	}

	.logga > i {
		font-size: 2cqw;
	}
	.contact-text {
		font-size: 16px;
	}
</style>
