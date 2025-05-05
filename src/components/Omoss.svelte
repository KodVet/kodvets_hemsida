<script>
	import { onMount } from 'svelte';

	let slideIndex = 1;
	let pictures = [
		{
			imgURL: 'images/bild5.jpg',
			altText: 'Bild 1'
		},
		{
			imgURL: 'images/bild4.png',
			altText: 'Bild 2'
		},
		{
			imgURL: 'images/blob6.png',
			altText: 'Bild 3'
		}
	];

	function plusSlides() {
		setSlideIndex(slideIndex + 1);
	}
	function minusSlides() {
		setSlideIndex(slideIndex - 1);
	}
	/**
	 * @param {number} n
	 */
	function currentSlides(n) {
		setSlideIndex(n);
	}

	/**
	 * @param {number} n
	 */
	function setSlideIndex(n) {
		let slides = document.getElementsByClassName('mySlides');
		if (n > slides.length) {
			slideIndex = 1;
		} else if (n < 1) {
			slideIndex = slides.length;
		} else {
			slideIndex = n;
		}
	}

	onMount(() => {
		setSlideIndex(slideIndex);
	});
</script>

<div class="aboutKodvet" id="about">
	<div class="about-text">
		<h5>Om oss</h5>
		<p>
			Hallå där! kodVet här – vill du veta hur mycket din hemsida är värd? Skämt åsido! Vi är ett
			utskott till sektionen för kognitionsvetenskap på LiU och filfaks enda programmeringsutskott!
		</p>
		<p>
			Vi pysslar exklusivt med webbutveckling i alla dess former. Mest bygger vi hemsidor och
			applikationer för vår egna sektion men vi jobbar också med andra projekt!
		</p>
		<p>
			kodVets filosofi är learning by doing! Det vi gör ska resultera i något konkret, design eller
			kod. Därför jobbar vi projektorienterat i olika grupper med klara mål och deadlines.
		</p>
		<p>
			Vårt mål: Att ge koggisar och webbisar möjligheten att bygga riktiga grejer och vässa sina
			skills inom webbutveckling och projektarbete – basically som en webbyrå på campus!
		</p>
		<div class="blob" id="blob">
			<img src="/images/blob10.png" alt="Blob Image" />
			<div class="iblob">
				<h3>Joina gänget här!</h3>
				<div class="socialIcons">
					<a href="https://www.facebook.com/kodvet"><i class="ri-facebook-box-fill"></i></a>
					<a href="https://www.instagram.com/webbgruppen_kodvet/"
						><i class="ri-instagram-line"></i></a
					>
					<a href="https://discord.gg/5HgdNfJVRh"><i class="ri-discord-line"></i></a>
				</div>
			</div>
		</div>
	</div>

	<div class="about-kodvet-img">
		<div class="slideshow-container">
			{#each pictures as picture, index}
				<div class:block={index === slideIndex - 1} class="mySlides fade">
					<img src={picture.imgURL} alt={picture.altText} />
				</div>
			{/each}
			<a class="prev" onclick={(event) => minusSlides()}>&#10094;</a>
			<a class="next" onclick={(event) => plusSlides()}>&#10095;</a>
			<div class="dot-container">
				{#each pictures as dot, index}
					<span
						class:active={index === slideIndex - 1}
						class="dot"
						onclick={(event) => currentSlides(index + 1)}
					></span>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	* {
		padding: 0;
		margin: 0;

		box-sizing: border-box;
		list-style: none;
		text-decoration: none;
		font-family: 'Source Code Pro', monospace;
	}
	.aboutKodvet {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 80px;
		gap: 10%;
		margin-left: 70px;
		scroll-margin-top: 150px;
	}

	.about-text {
		text-align: left;
		margin-top: -5px;
		width: 70%;
	}

	.about-text h5 {
		font-size: 22px;
		font-weight: 600;
		color: var(--text-color);
		text-transform: uppercase;
		letter-spacing: 6px;
		margin-bottom: 20px;
	}

	.about-text p {
		line-height: 1.6;
		margin-bottom: 20px;
	}

	.about-kodvet-img {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 100px;
		width: 70%;
	}

	.slideshow-container {
		width: 100%;
		margin-top: 0;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
	}

	.mySlides {
		display: none;
	}

	.mySlides img {
		width: 100%;
		height: 550px;
		object-fit: cover;
		border-radius: 10px;
	}

	.prev,
	.next {
		cursor: pointer;
		position: absolute;
		top: 45%;
		transform: translateY(-50%);
		padding: 10px;
		color: #d0c9c9;
		font-weight: bold;
		font-size: 35px;
		transition: 0.6s ease;
		user-select: none;
	}

	.prev {
		left: 0px;
		transition:
			ease 0,
			1s;
	}

	.next {
		right: 0px;
		transition:
			ease 0,
			1s;
	}

	.prev:hover,
	.next:hover {
		color: #fff;
	}

	.dot-container {
		text-align: center;
		margin-top: 15px;
	}

	.dot {
		cursor: pointer;
		height: 12px;
		width: 12px;
		margin: 0 5px;
		background-color: #4a4747;
		border-radius: 50%;
		display: inline-block;
		transition: background-color 0.6s ease;
	}

	.blob {
		position: relative;
		width: 90%;
		text-align: center;
		z-index: 1;
	}

	.blob img {
		width: 90%;
		height: auto;
	}

	.blob h3 {
		background-color: transparent;
		color: white;
		font-size: 20px;
		z-index: 2;
	}

	.iblob {
		top: 40%;
		left: 30%;
		position: absolute;
	}

	:global(.active) {
		background-color: #858282 !important;
	}

	.fade {
		animation-name: fade;
		animation-duration: 1.5s;
	}

	.block {
		display: block;
	}

	@keyframes fade {
		from {
			opacity: 0.4;
		}
		to {
			opacity: 1;
		}
	}
	.socialIcons {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.socialIcons a {
		text-decoration: none;
		padding: 10px;
		background-color: rgba(255, 255, 255, 0.15);
		margin: 10px;
		border-radius: 50%;
		font-size: 20px;
		color: #000;
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
</style>
