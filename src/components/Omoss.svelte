<script>
	import { onMount } from 'svelte';

	let slideIndex = 1;
	let pictures = [
		{
			imgURL: 'images/bild5.jpg',
			altText: 'Bild 1'
		},
		{
			imgURL: 'images/bild6.png',
			altText: 'Bild 2'
		},
		{
			imgURL: 'images/blob5.png',
			altText: 'Bild 3'
		},
		{
			imgURL: 'images/blob6.png',
			altText: 'Bild 4'
		},
		{
			imgURL: 'images/blob6.png',
			altText: 'Bild 5'
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
		<p>Hej! Vi är ett utskott till sektionen för kognitionsvetenskap på LiU och filfaks enda programmeringsutskott!</p>
		<p>
			Vi är ett härligt gäng som exklusivt håller på med webbprogrammering och gör hemsidor och applikationer. Oavsett om du har kodat massor innan eller bara
			är intresserad av att lära dig är du välkommen att gå med. Vi lär oss tillsammans och jobbar i projektorienterade grupper där design och kod växer fram.
		</p>
		<p>
			Vi vill ge koggisar och webbisar möjligheten att bygga riktiga grejer och vässa sina skills inom webbutveckling och projektarbete – basically som en
			webbyrå på campus!
		</p>
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
					<span class:active={index === slideIndex - 1} class="dot" onclick={(event) => currentSlides(index + 1)}></span>
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
		align-items: start;
		padding: 80px;
		gap: 10%;
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
		font-size: 16px;
	}

	.about-kodvet-img {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 100px;
		width: 70%;
		top: 0;
	}

	.slideshow-container {
		width: 100%;
		margin-top: 0;
		border-radius: 10px;
		overflow: visible;
		position: relative;
	}

	.mySlides {
		display: none;
	}

	.mySlides img {
		width: 100%;
		height: 450px;
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
		left: -50px;
		transition:
			ease 0,
			1s;
	}

	.next {
		right: -50px;
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

	:global(.active) {
		background-color: rgb(36, 193, 197) !important;
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

	@media (max-width: 600px) {
		.aboutKodvet {
			flex-direction: column;
			align-items: center;
			gap: 10%;
			padding: 10px;
			scroll-margin-top: 150px;
			margin: 0px;
			margin-bottom: 30px;
		}

		.about-kodvet-img {
			align-items: center;
			justify-content: center;
			margin: 0px;
		}
	}
</style>
