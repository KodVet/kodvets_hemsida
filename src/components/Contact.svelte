<div class="contactpic">
	<!--<img id="blob" src="./images/Group_2_1.png" alt="Bakgrundsbild" />-->

	<div class="left_div">
		<img src="./images/liten_blob.png" alt="LeftBlob" id="left-blob" />
		<a class="discordlogga" href="https://discord.gg/5HgdNfJVRh">
			<i class="ri-discord-line"></i>
		</a>
	</div>

	<div class="right_div">
		<img src="./images/stor_blob.png" alt="RightBlob" id="right-blob" />
		<div class="contact-text"><p>Text ska stå här fyll i senare</p></div>
		<a href="https://www.facebook.com/kodvet" class="new_contact-btn"><p>KONTAKTA OSS</p></a>
	</div>
</div>

<style>
	.contactpic {
		display: flex;
		position: relative;
		justify-content: space-between;
		align-items: center;

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
		display: inline-block;
		background-color: rgba(255, 255, 255, 0.15);
		color: white;
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
	}

	.logga {
		display: flex;
		padding: 15px;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.15);
		border-radius: 50%;
		font-size: 25px;
		color: #ffff;
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
	}
</style>
