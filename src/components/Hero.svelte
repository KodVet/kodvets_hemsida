<script>
	/**
	 * @param {MouseEvent & { currentTarget: EventTarget & HTMLDivElement; }} event
	 */
	function flipCard(event) {
		event.currentTarget.classList.toggle('clicked');
	}
</script>

<div class="margin"></div>
<section class="hero_background" id="hero">
	<div class="hero_content">
		<div title="Klicka på mig!" class="card" onclick={(event) => flipCard(event)}>
			<div class="card-inner">
				<div class="card-front">
					<img src="images/kodvet_logo_rund_indigo_bla.png" alt="Framsida Bild" />
				</div>
				<div class="card-back">
					<img src="images/sektionen.png" alt="Baksida Bild" />
				</div>
			</div>
		</div>
		<div class="text-box">
			<h1>Webbgruppen kodVet</h1>
		</div>
	</div>
</section>

<style>
	.margin {
		height: 65px;
	}
	* {
		padding: 0;
		margin: 0;

		box-sizing: border-box;
		list-style: none;
		text-decoration: none;
		font-family: 'Source Code Pro', monospace;
	}
	.hero_background {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 99ch;
		user-select: none;
		width: 100%;
		background-image: linear-gradient(to bottom, rgba(12, 12, 12, 0.2) 40%, var(--bg-color)), url(/images/kodVet-24-25.JPG);
		background-size: cover;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		background-position: 90% center;
	}
	section {
		padding: 0px 14%;
	}
	* {
		box-sizing: border-box;
		font-family: 'Source Code Pro', monospace;
		padding: 0px;
		margin: 0px;
		list-style: none;
		text-decoration: none;
	}
	section {
		display: block;
		unicode-bidi: isolate;
	}

	.hero_content {
		margin-top: -100px;
	}

	div {
		display: block;
		unicode-bidi: isolate;
	}
	.text-box {
		text-align: center;
	}
	div {
		display: block;
		unicode-bidi: isolate;
	}
	:-webkit-any(article, aside, nav, section) h1 {
		font-size: 1.5em;
		margin-block-start: 0.83em;
		margin-block-end: 0.83em;
	}
	h1 {
		display: block;
		font-size: 2em;
		margin-block-start: 0.67em;
		margin-block-end: 0.67em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		font-weight: bold;
		unicode-bidi: isolate;
	}

	:global(.hero_logga.clicked) {
		background: center/cover no-repeat url('/images/sektionen.png');
	}

	.card {
		width: min(200px, 25vw);
		height: min(200px, 25vw);
		margin: 1rem auto;
		perspective: 1000px;
		cursor: grab;
	}

	.card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		transition: transform 0.6s;
		transform-style: preserve-3d;
	}
	:global(.card.clicked) .card-inner {
		transform: rotateY(180deg);
	}

	.card-front,
	.card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		border-radius: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card-back {
		transform: rotateY(180deg);
	}

	.card-front img,
	.card-back img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.5rem;
	}

	.card-back img {
		width: 103%;
		height: 103%;
	}
	@media (max-width: 600px) {
		.hero_background {
			height: 35ch;
			width: 100%;
			background-position: center;
		}

		.text-box h1 {
			font-size: 15px;
			margin-top: 30%;
		}
		.card {
			width: min(100px, 25vw);
			height: min(100px, 25vw);
			margin: 1rem auto;
			perspective: 1000px;
			cursor: grab;
		}
		.hero_content {
			margin-top: 0px;
		}
	}
</style>
