<div class="contactpic">
	<img id="blob" src="./images/Group_2.png" />
	<div class="left">
		<a class="logga" href="https://discord.gg/5HgdNfJVRh"><i class="ri-discord-line"></i></a>
		<!-- logga ska befinna sig på blob till vänster -->
	</div>
	<div class="right">
		<!-- texten ska vara ovan knappen  -->
		<a class="contact-text">Text ska stå här fyll i senare</a>
		<button class="contact-button">Klicka för mail!</button>
	</div>
</div>

<style>
	.contactpic {
		position: relative;
	}
	#blob {
		display: flex;
		margin: auto;
		width: 65%;
		z-index: 0;
	}
	.contact-button {
		position: absolute;
		z-index: 1;
		left: 55%;
		top: 55%;
		width: 10%;
		height: 10%;
		background-color: transparent;
		color: #ffffff;
		border-radius: 8px;
		text-decoration: none;
		font-weight: bold;
		transition:
			background-color 0.3s ease,
			transform 0.3s ease;
	}
	.contactbutton a {
		color: #000;
	}

	.contact-button:hover {
		background-color: #6b66a1;
		transform: translateY(-3px);
	}

	.logga {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.logga a {
		text-decoration: none;
		padding: 10px;
		background-color: #fff;
		margin: 10px;
		border-radius: 50%;
		font-size: 20px;
		color: #000;
	}

	.logga a:hover {
		background-color: var(--main-color);
		transition: 0.5s;
	}
	.logga a li {
		font-size: 5rem;
		color: black;
		opacity: 0.9;
		transition: transfrom 0.5s ease;
	}
</style>
