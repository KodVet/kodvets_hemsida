<script>
	import { onMount } from 'svelte';

	let slideIndex = 1;

	/**
	 * @param {number} n
	 */
	function plusSlides(n) {
		showSlides((slideIndex += n));
	}

	/**
	 * @param {number} n
	 */
	function currentSlides(n) {
		showSlides((slideIndex = n));
	}

	/**
	 * @param {number} n
	 */
	function showSlides(n) {
		let i;
		let slides = document.getElementsByClassName('mySlides');
		let dots = document.getElementsByClassName('dot');
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(' active', '');
		}
		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].className += ' active';
	}

	onMount(() => {
		showSlides(slideIndex);
	});
</script>

<div class="aboutKodvet" id="about">
	<div class="about-text">
		<h5>Om oss</h5>
		<p>
			Vi är kodVet, Kogvets webbgrupp! Vi sköter sektionens och alla dess utskotts digitala
			lösningar. Detta innebär sektionshemsidor, diverse appar för studenter och annat ute i
			cyberrymden som rör Kogvet. Vi har även gjort projekt åt andra exempelvis studentkåren StuFF.
		</p>
		<p>
			I samband med att vi gör detta nödvändiga arbete har vi även som mål att lära oss om
			webbutveckling och interaktionsdesign i ett härligt sällskap. Hör av dig om du är intresserad
			av att medverka på något av våra kodhäng!
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
			<div class="mySlides fade">
				<img src="images/bild5.jpg" alt="Bild 1" />
			</div>
			<div class="mySlides fade">
				<img src="images/bild4.png" alt="Bild 2" />
			</div>
			<div class="mySlides fade">
				<img src="images/blob6.png" alt="Bild 3" />
			</div>
			<a class="prev" onclick={(event) => plusSlides(-1)}>&#10094;</a>
			<a class="next" onclick={(event) => plusSlides(1)}>&#10095;</a>
			<div class="dot-container">
				<span class="dot" onclick={(event) => currentSlides(1)}></span>
				<span class="dot" onclick={(event) => currentSlides(2)}></span>
				<span class="dot" onclick={(event) => currentSlides(3)}></span>
			</div>
		</div>
	</div>
</div>

<style>
	.aboutKodvet {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 100px;
		gap: 10%;
		margin-left: 120px;
		scroll-margin-top: 150px;
	}

	.about-text {
		text-align: left;
		margin-top: -5px;
		width: 80%;
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
		font-size: 16px;
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
		width: 100%;
		text-align: center;
		z-index: 1;
	}

	.blob img {
		width: 100%;
		height: auto;
	}

	.blob h3 {
		background-color: transparent;
		color: white;
		font-size: 24px;
		z-index: 2;
	}

	.iblob {
		top: 25%;
		left: 25%;
		position: absolute;
	}

	:global(.active) {
		background-color: #858282 !important;
	}

	.fade {
		animation-name: fade;
		animation-duration: 1.5s;
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
		background-color: #fff;
		margin: 10px;
		border-radius: 50%;
		font-size: 20px;
		color: #000;
	}

	.socialIcons a:hover {
		background-color: var(--main-color);
		transition: 0.5s;
	}
	.socialIcons a li {
		font-size: 5rem;
		color: black;
		opacity: 0.9;
		transition: transfrom 0.5s ease;
	}
</style>
