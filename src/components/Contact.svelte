<div class="contactpic">
	<img id="blob" src="./images/Group_2_1.png" alt="Bakgrundsbild" />
	<div class="left_div">
		<!-- Logga placeras över bloben till vänster -->
		<a class="logga" href="https://discord.gg/5HgdNfJVRh">
			<i class="ri-discord-line"></i>
		</a>
	</div>

	<div class="right_div">
		<!-- Text och knapp placeras till höger över bloben -->
		<div class="contact-text">Text ska stå här fyll i senare</div>
		<a href="https://www.facebook.com/kodvet" class="new_contact-btn">KONTAKTA OSS</a>
	</div>
</div>

<style>
	.contactpic {
		display: flex;
		position: relative;
		justify-content: space-between;
		align-items: center;
		gap: 10%;
		margin-left: 70px;
		scroll-margin-top: 150px;
		z-index: 1;
	}
	#blob {
		display: flex;
		margin: auto;
		width: 65%;
		z-index: 0;
	}
	.left_div,
	.right_div {
		position: absolute;
		z-index: 1;
		padding-top: 20%;
		display: flex;
	}

	.left_div {
		top: 0;
		left: 18%;
		margin: 20px;
	}

	.right_div {
		margin: 50px;
		top: 20;
		display: flex;
		flex-flow: column;
		width: 30%;
		right: 15%;
	}

	.new_contact-btn a {
		font-size: 40px;
	}

	.new_contact-btn {
		position: absolute;
		z-index: 1;
		left: 10%;
		top: 60%;
		width: 37%;
		height: 15%;
		display: inline-block;
		background-color: #5c1a7d;
		color: white;
		padding: 15px 30px;
		border-radius: 8px;
		text-decoration: none;
		transition:
			background-color 0.3s ease,
			transform 0.3s ease;
	}

	.new_contact-btn:hover {
		background-color: #894da6;
		transform: translateY(-3px);
	}

	.logga {
		position: relative;
		display: flex;
		z-index: 1;
		padding: 15px;
		left: 160px;
		top: -50px;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.15);
		border-radius: 50%;
		font-size: 25px;
		color: #000;
		outline-color: rgba(255, 255, 255, 0);
	}

	.logga:hover {
		background-color: var(--main-color);
		outline-style: solid;
		outline-color: rgba(255, 255, 255, 0.2);
		transition: 0.3s ease-in-out;
	}
	.contact-text {
		position: absolute;
		left: -30px;
		z-index: 1;
		top: 35%;
		font-size: 20px;
		height: 18%;
	}
</style>
