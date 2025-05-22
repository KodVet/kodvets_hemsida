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
		gap: 10%;
		scroll-margin-top: 150px;
		z-index: 1;
	}

	.left_div,
	.right_div {
		position: relative;
		z-index: 1;
		display: flex;
	}
	#left-blob {
		width: 60%;
	}

	#right-blob {
		width: 160%;
	}

	.left_div {
		top: 0;
		left: 15%;
	}

	.right_div {
		margin: 50px;
		top: 20;
		display: flex;
		flex-flow: column;
		width: 30%;
		right: 22.5%;
	}

	.new_contact-btn {
		font-size: 100%;
		position: absolute;
		z-index: 1;
		left: 52%;
		top: 60%;
		width: 45%;
		height: 10%;
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

	.discordlogga {
		position: absolute;
		display: flex;
		text-decoration: none;
		z-index: 3;
		padding: 15px;
		right: 52%;
		top: 55%;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.15);
		border-radius: 50%;
		font-size: 25px;
		color: #ffff;
		outline-color: rgba(255, 255, 255, 0);
	}

	.discordlogga:hover {
		background-color: var(--main-color);
		outline-style: solid;
		outline-color: rgba(255, 255, 255, 0.2);
		transition: 0.3s ease-in-out;
	}
	.contact-text {
		position: absolute;
		text-align: center;
		left: 55%;
		z-index: 1;
		top: 35%;
		font-size: 20px;
		height: 18%;
	}
</style>
