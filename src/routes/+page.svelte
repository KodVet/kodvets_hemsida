<script lang="ts">
</script>

<svelte:head>
	<title>kodVet</title>
	<meta name="description" content="kodVet!" />
</svelte:head>

<main>
	<section id="hero">
		<div class="wrapper">
			<h2 class="heroSub">VI TAR FRAM</h2>
			<h1 id="hero-text">TEST</h1>
			<img src="/images/kogvet.png" width="210" id="kogvetlogga" />
		</div>
	</section>
	<section id="about">
		<div class="wrapper">
			<div class="about_text">
				<h1>Om oss</h1>

				<p>
					Vi är Kodvet, Kogvets webbgrupp! Vi sköter sektionens och alla dess utskotts digitala
					lösningar. Detta innebär sektionshemsidor, diverse appar för studenter och annat ute i
					cyberrymden som rör Kogvet.
				</p>

				<p>
					I samband med att vi gör detta nödvändiga arbete har vi även som mål att lära oss om
					webbutveckling och interaktionsdesign i ett härligt sällskap
				</p>
			</div>
			<div class="row_of_pictures">
				<div class="row_pic">
					<span
						class="iconify"
						data-icon="eos-icons:application-outlined"
						data-width="150"
						data-height="150"
					></span>
					<p>webbutveckling</p>
				</div>
				<div class="row_pic">
					<span
						class="iconify"
						data-icon="eos-icons:machine-learning-outlined"
						data-width="150"
						data-height="150"
					></span>
					<p>kompetensbyggande</p>
				</div>
				<div class="row_pic">
					<span
						class="iconify"
						data-icon="eos-icons:cluster-management"
						data-width="150"
						data-height="150"
					></span>
					<p>systemhantering</p>
				</div>
			</div>
		</div>
	</section>

	<section id="projects">
		<div class="wrapper">
			<h1>Projekt</h1>
			<article id="nappn">
				<div class="wrapper" id="nappn-text">
					<h2>Nappn</h2>
					<p>
						Nappn är en webapp som Kodvet tagit fram för mottagningen. På denna app får den nya
						studenten information om den kåranordnade mottagningen. Här finns ett schema över alla
						mottagningens aktiviteter och en karta över Linköping med viktiga platser så den nya
						studenten hittar rätt.
					</p>
				</div>
				<img src="/images/nappn.png" alt="" height="350px" />
			</article>
			<article id="kognivote">
				<div class="wrapper" id="kognivote-text">
					<h2>Kognivote</h2>
					<p>
						Kognivote är ett verktyg för att räkna röster vid sektionsmöten. Det är en hemsida varje
						student kommer åt via mobilen där man kan logga in med sitt student-id efter att man
						fysiskt har checkat in på mötet med sitt studentkorts RFID.
					</p>
				</div>
				<img src="/images/kognivote.png" alt="" height="350px" />
			</article>
		</div>
	</section>
	<section id="members">
		<div class="wrapper">
			<h1>Medlemmar</h1>
			<p id="membertext">
				Kodvet består av en förtroendevald som är ansvarig för utskottet. Den förtroendevalda
				rekryterar en kärngrupp av medlemmar. Bland annat ska det alltid finnas en sekreterare i
				kärngruppen. Nedan kan du lära känna människorna bakom LiUs hetaste webbgrupp!
			</p>

			<div class="container">
				<div class="memberCard">
					<div class="hoverCard">
						<h1 class="name overlayText">Alexander</h1>
						<p class="post overlayText">KODGORILLA & CEO</p>

						<ul class="facts overlayText">
							<li>Medlem sedan: 2019</li>
							<li>Årskurs: 3</li>
							<li>Stan för: Roger Pontare</li>
						</ul>
						<img class="memberImg" src="/images/members/alex.png" />
					</div>
					<div class="backdrop"></div>
				</div>
				<div class="memberCard">
					<div class="hoverCard">
						<h1 class="name overlayText">Matilda</h1>
						<p class="post overlayText">CHEF VISIONÄR & CTO</p>
						<ul class="facts overlayText">
							<li>Medlem sedan: 2019</li>
							<li>Årskurs: 3</li>
							<li>Bästa personlighetsdrag: Pratar jättemycket</li>
						</ul>
						<img class="memberImg" src="/images/members/matilda.png" />
					</div>
					<div class="backdrop"></div>
				</div>
				<div class="memberCard">
					<div class="hoverCard">
						<h1 class="name overlayText">Johannes</h1>
						<p class="post overlayText">HYPEBEAST & KODGOBLIN</p>

						<ul class="facts overlayText">
							<li>Medlem sedan: 2020</li>
							<li>Årskurs: 2</li>
							<li>Kosthållning: Enbart ägg</li>
						</ul>
						<img class="memberImg" src="/images/members/johannes.png" />
					</div>
					<div class="backdrop"></div>
				</div>
				<div class="memberCard">
					<div class="hoverCard">
						<h1 class="name overlayText">Marius</h1>
						<p class="post overlayText">UTBILDNINGSANSVARIG & UTILITARIST</p>
						<ul class="facts overlayText">
							<li>Medlem sedan: 2020</li>
							<li>Årskurs: 2</li>
							<li>Rekord: Kodvets mest defenestrerade medlem</li>
						</ul>
						<img class="memberImg" src="/images/members/marius.png" />
					</div>
					<div class="backdrop"></div>
				</div>
				<div class="memberCard">
					<div class="hoverCard">
						<h1 class="name overlayText">Thea</h1>
						<p class="post overlayText">ANNALIST & ANARKIST</p>
						<ul class="facts overlayText">
							<li>Medlem sedan: 2020</li>
							<li>Årskurs: 3</li>
							<li>Talang: Otroligt opassande ordlekar</li>
						</ul>
						<img class="memberImg" src="/images/members/thea-2.png" />
					</div>
					<div class="backdrop"></div>
				</div>
				<div class="memberCard">
					<div class="hoverCard">
						<h1 class="name overlayText">Ida</h1>
						<p class="post overlayText">PIZZA AND MERCH MANAGER</p>
						<ul class="facts overlayText">
							<li>Medlem sedan: 2021</li>
							<li>Årskurs: 1</li>
							<li>Egenskap: Älskar smask</li>
						</ul>
						<img class="memberImg" src="/images/members/ida.png" />
					</div>
					<div class="backdrop"></div>
				</div>
				<div class="memberCard">
					<div class="hoverCard">
						<h1 class="name overlayText">Gustaf</h1>
						<p class="post overlayText">WEBMEISTER & HACKER</p>
						<ul class="facts overlayText">
							<li>Medlem sedan: 2020</li>
							<li>Årskurs: 2</li>
							<li>Hotell: Trivago</li>
						</ul>
						<img class="memberImg" src="/images/members/gustaf.png" />
					</div>
					<div class="backdrop"></div>
				</div>
				<div class="memberCard">
					<div class="hoverCard">
						<h1 class="name overlayText">Victor</h1>
						<p class="post overlayText">LORD OF THE PHONE RINGS</p>
						<ul class="facts overlayText">
							<li>Medlem sedan: 2021</li>
							<li>Årskurs: 1</li>
							<li>Har fler fingrar än genomsnittet</li>
						</ul>
						<img class="memberImg" src="/images/members/victor.png" />
					</div>
					<div class="backdrop"></div>
				</div>
				<div class="memberCard">
					<div class="hoverCard">
						<h1 class="name overlayText">Björn</h1>
						<p class="post overlayText">UTBILDNINGSANSVARIG & DEONTOLOG</p>
						<ul class="facts overlayText">
							<li>Medlem sedan: 2021</li>
							<li>Årskurs: 2</li>
							<li>Snittar 6 på Stanford Sleepiness Scale</li>
						</ul>
						<img class="memberImg" src="/images/members/bjorn.png" />
					</div>
					<div class="backdrop"></div>
				</div>
				<div class="memberCard">
					<div class="hoverCard">
						<h1 class="name overlayText">Fanny</h1>
						<p class="post overlayText">FUN AND EXPERIENCE MANAGER</p>
						<ul class="facts overlayText">
							<li>Medlem sedan: 2021</li>
							<li>Årskurs: 2</li>
							<li>Kompetensområden: chips och dipp</li>
						</ul>
						<img class="memberImg" src="/images/members/fanny.png" />
					</div>
					<div class="backdrop"></div>
				</div>
				<div class="memberCard">
					<div class="hoverCard">
						<h1 class="name overlayText">Miguel</h1>
						<p class="post overlayText">KODJESUS</p>
						<ul class="facts overlayText">
							<li>Medlem sedan: 2022</li>
							<li>Årskurs: 1</li>
							<li>Kodar för våra synder</li>
						</ul>
						<img class="memberImg" src="/images/members/miguel.png" />
					</div>
					<div class="backdrop"></div>
				</div>
			</div>
		</div>
	</section>
	<section id="contact">
		<div class="wrapper">
			<h1>Kontakt</h1>
			<p>
				Du kan nå oss på <a href="https://www.instagram.com/webbgruppen_kodvet"> Instagram</a>,
				<a href="https://www.facebook.com/kodvet">Facebook</a>
				eller vår <a href="mailto:webbgruppen.kogvet@gmail.com"> mail</a>. Gå gärna med i vår
				<a href="https://discord.gg/mmeG3FpW"> häng-discord</a> för mer sociala sammanhang.
			</p>
			<div id="socials">
				<a href="https://www.instagram.com/webbgruppen_kodvet/"
					><span id="Instagram_icon" class="iconify" data-icon="il:instagram"></span></a
				>
				<a href="https://www.facebook.com/kodvet"
					><span class="iconify" data-icon="bx:bxl-facebook-circle"></span></a
				>
				<a href="mailto:webbgruppen.kogvet@gmail.com"
					><span class="iconify" data-icon="bx:bx-mail-send"></span></a
				>
				<a href="https://discord.gg/5HgdNfJVRh"
					><span class="iconify" data-icon="bx:bxl-discord"></span></a
				>
			</div>
		</div>
	</section>
</main>

<style>
	h1,
	h2,
	p {
		margin: 0;
		margin-left: 20px;
		margin-right: 20px;
	}

	h1 {
		margin-bottom: 36px;
		font-size: 36px;
	}

	h2 {
		margin-bottom: 16px;
	}

	section {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		min-height: 100vh;
		margin: 0px;
		font-weight: 500;
		overflow: auto;
		padding-top: 40px;
		max-width: 100vw;
	}

	#about {
		background: -webkit-gradient(linear, left top, left bottom, from(#24c3c6), to(#24c3c6));
		background: linear-gradient(180deg, #24c3c6 0%, #24c3c6 100%);
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.about_text {
		max-width: 768px;
		width: 100vw;
	}

	#about h1 {
		margin-bottom: 36px;
	}

	#about p {
		font-size: 1rem;
	}

	#projects {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		background: -webkit-gradient(linear, left top, left bottom, from(#24c3c6), to(#7c83fd));
		background: linear-gradient(180deg, #24c3c6 0%, #7c83fd 100%);
	}

	#members {
		background: -webkit-gradient(linear, left top, left bottom, from(#7c83fd), to(#af2aee));
		background: linear-gradient(180deg, #7c83fd 0%, #af2aee 100%);
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	#membertext {
		margin-bottom: 25px;
	}

	#members p {
		max-width: 60%;
	}

	#projects h1 {
		-ms-flex-item-align: start;
		align-self: flex-start;
		margin-bottom: 72px;
	}

	#projects * {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	#projects article {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-column-gap: 104px;
		column-gap: 104px;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}

	#projects article .wrapper {
		margin: 0;
		max-width: 420px;
	}

	#kognivote {
		-webkit-box-orient: horizontal;
		-webkit-box-direction: reverse;
		-ms-flex-direction: row-reverse;
		flex-direction: row-reverse;
		margin-top: 88px;
	}

	#projects h2 {
		-ms-flex-item-align: start;
		align-self: flex-start;
	}

	#hero {
		background: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(#35d8ba),
			color-stop(0.01%, #34d7bb),
			color-stop(100%, #23c2c6),
			to(#23c2c6)
		);
		background: linear-gradient(180deg, #35d8ba 0%, #34d7bb 0.01%, #23c2c6 100%, #23c2c6 100%);
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
	}

	#hero-text {
		text-align: center;
		font-size: 36px;
		margin-bottom: 42px;
		max-width: 650px;
	}

	#hero h1 {
		margin-bottom: 72px;
	}

	#hero h2 {
		margin-top: 56px;
		margin-bottom: 64px;
	}

	.heroSub {
		font-weight: normal;
		opacity: 90%;
	}

	#kogvetlogga {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.wrapper {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		margin: 60px;
		-ms-flex-preferred-size: 50%;
		flex-basis: 50%;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.row_of_pictures {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		-ms-flex-pack: distribute;
		justify-content: space-around;
		-webkit-column-gap: 30px;
		column-gap: 30px;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		max-width: 720px;
		min-width: 350px;
	}

	.row_pic {
		text-align: center;
		padding: 100px;
	}

	.row_pic p {
		margin-top: 40px;
	}

	#contact {
		background: -webkit-gradient(linear, left top, left bottom, from(#af2aee), to(#420360));
		background: linear-gradient(180deg, #af2aee 0%, #420360 100%);
	}

	a {
		color: inherit;
	}

	a:hover {
		text-decoration: none;
	}

	#socials {
		margin-top: 30px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		width: 100%;
		max-width: 1320px;
		-webkit-box-pack: space-evenly;
		-ms-flex-pack: space-evenly;
		justify-content: space-evenly;
	}

	#socials .iconify {
		padding: 12px;
		font-size: 100px;
	}

	.memberCard {
		position: relative;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}

	.hoverCard {
		z-index: 1;
		width: 200px;
	}

	.overlayText {
		position: absolute;
		z-index: 2;
		text-shadow: none;
	}

	.name,
	.post,
	.facts {
		color: #333333;
	}

	.name {
		left: 15px;
		margin-top: 5px;
		font-size: 22px;
	}

	.post {
		opacity: 1;
		top: 35px;
		left: 15px;
		font-size: 12px;
		text-shadow: 0px 1px 2px rgba(255, 255, 255, 0.5);
	}

	.facts {
		opacity: 0;
		top: 120px;
		margin-left: 5px;
		font-size: 0.9em;
		list-style: none;
		padding-left: 10px;
	}

	.facts > li {
		margin-bottom: 10px;
	}

	.hoverCard:hover .facts {
		color: white;
		opacity: 1;
	}

	.hoverCard > * {
		-webkit-transition: all 0.3s;
		transition: all 0.3s;
	}

	.memberImg {
		position: relative;
		border: 0.5px solid #000000;
		background-color: #bec7d8;
		max-width: 100%;
		z-index: 1;
		border-radius: 15px;
	}

	.hoverCard:hover > .name,
	.hoverCard:hover > .post {
		color: white;
		text-shadow: none;
	}

	.backdrop {
		position: absolute;
		top: 10px;
		left: 10px;
		border-radius: 15px;
		width: 200px;
		height: 284px;
		background-color: white;
		z-index: 0;
	}

	.hoverCard:hover > .memberImg {
		-webkit-filter: brightness(50%);
		filter: brightness(50%);
		-webkit-transition: all 0.3s;
		transition: all 0.3s;
	}

	.container {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		max-width: 800px;
		row-gap: 50px;
		-webkit-column-gap: 80px;
		column-gap: 80px;
	}

	#Instagram_icon {
		height: 90px;
		margin-top: 7px;
	}

	@media only screen and (max-width: 600px) {
		.row_of_pictures {
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
		}
	}
	/*# sourceMappingURL=styles.css.map */
</style>
