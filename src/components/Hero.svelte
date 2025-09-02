<script>
	/**
	 * @param {MouseEvent & { currentTarget: EventTarget & HTMLDivElement; }} event
	 */
	function flipCard(event) {
		event.currentTarget.classList.toggle('clicked');
	}
</script>

<section class="hero_background" id="hero">
	<div title="Klicka på mig!" class="card" onclick={(event) => flipCard(event)}>
		<div class="card-inner">
			<div class="card-front">
				<img src="images/kodvet_logo_rund_indigo_bla.png" alt="Framsida Bild" />
			</div>
			<div class="card-back">
				<img src="images/kogvet.png" alt="Baksida Bild" />
			</div>
		</div>
	</div>
	<div class="text-box">
		<h1>Webbgruppen kodVet</h1>
	</div>
</section>

<style>
	* {
		padding: 0;
		margin: 0;

		box-sizing: border-box;
		list-style: none;
		text-decoration: none;
		font-family: 'Source Code Pro', monospace;
		overflow: hidden;
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
	@media (max-width: 1000px) {
		.hero_logga {
			width: 250px;
			height: 250px;
		}
	}
	.hero_logga {
		width: min(250px, 25vw);
		height: min(250px, 25vw);
		box-shadow: 0 0 25px var(--text-color);
		cursor: pointer;
		position: relative;
		border-radius: 50%;
		background: url(/images/kodvet_logo_rund_indigo_bla.png) center center / cover no-repeat;
		overflow: hidden;
		transition: 5s;
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
		background: center/cover no-repeat url('/images/kogvet.jpeg');
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
	.card.flipped .card-inner {
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
	@media (max-width: 600px) {
		.hero_background {
			height: 35ch;
			width: 100%;
			background-position: center;
		}
		h1 {
			font-size: 2px;
		}
		.text-box {
			font-size: 6px;
		}
		.card {
			width: min(100px, 25vw);
			height: min(100px, 25vw);
			margin: 1rem auto;
			perspective: 1000px;
			cursor: grab;
		}
	}
</style>
