<script>
	let read_mode = 'Läs Mer';

	function toggle_read_mode() {
		if (read_mode == 'Läs Mer') {
			read_mode = 'Läs Mindre';
		} else {
			read_mode = 'Läs Mer';
		}
	}

	function reset_read_mode() {
		read_mode = 'Läs Mer';
	}
</script>

<section class="projekt" id="projects">
	<div class="center-text">
		<h1>KodVet Projekt</h1>
		<p>Här kan ni se och läsa om våra akutella eller färdiga projekt</p>
	</div>

	<div class="kodvet_project_wrapper">
		<input type="radio" name="projekt-slider" id="projekt-1" checked />
		<input type="radio" name="projekt-slider" id="projekt-2" />
		<input type="radio" name="projekt-slider" id="projekt-3" />
		<input type="radio" name="projekt-slider" id="projekt-4" />
		<input type="radio" name="projekt-slider" id="projekt-5" />

		<a onclick={reset_read_mode} class="prev">&#10094;</a>
		<a class="next">&#10095;</a>
		<div class="kodvet_projekt">
			<!-- Projekt 1 -->
			<label class="box" for="projekt-1">
				<img src="/images/nappn.kognitivet.se.png" alt="Nappn" height="350px" />
				<div class="projekt-info">
					<h4>Nappn</h4>
					<p>Nappn är en webapp som Kodvet tagit fram för mottagningen</p>
					<input type="checkbox" id="toggle-1" />
					<div class="hidden-content">
						<p>
							På denna app får den nya studenten information om den kåranordnade mottagningen. Här finns ett schema över alla mottagningens aktiviteter och en
							karta över Linköping med viktiga platser så den nya studenten hittar rätt.
						</p>
					</div>
					<label onclick={toggle_read_mode} class="toggle-label" for="toggle-1">{read_mode}</label>
				</div>
			</label>

			<!-- Projekt 2 -->
			<label class="box" for="projekt-2">
				<img src="/images/kogvet.se.png" alt="Projekt 2" height="350px" />
				<div class="projekt-info">
					<h4>Sektionshemsidan för Kogvet</h4>
					<p>Just nu arbetar vi med en ny hemsida till sektionen för kognitionsvetenskapsprogrammet.</p>
					<input type="checkbox" id="toggle-2" />
					<div class="hidden-content">
						<p>Projektet planeras att vara klart för anvädning hösten 2025.</p>
					</div>
					<label onclick={toggle_read_mode} class="toggle-label" for="toggle-2">{read_mode}</label>
				</div>
			</label>

			<!-- Projekt 3 -->
			<label class="box" for="projekt-3">
				<img src="/images/kognivote.kodvet.se.png" alt="Kognivote" height="350px" />
				<div class="projekt-info">
					<h4>Kognivote</h4>
					<p>Kognivote är ett verktyg för att räkna röster vid sektionsmöten</p>
					<input type="checkbox" id="toggle-3" />
					<div class="hidden-content">
						<p>
							Det är en hemsida varje student kommer åt via mobilen där man kan logga in med sitt student-id efter att man fysiskt har checkat in på mötet med
							sitt studentkorts RFID
						</p>
					</div>
					<label onclick={toggle_read_mode} class="toggle-label" for="toggle-3">{read_mode}</label>
				</div>
			</label>

			<!-- Projekt 4 -->

			<label class="box" for="projekt-4">
				<img src="images/plusbild.png" alt="bild 2" height="350px" />
				<div class="projekt-info">
					<h4>Vill du vara med i nästa projekt?</h4>
					<p>Gå med i gruppen eller sammarbeta med oss?</p>
				</div>
			</label>

			<!-- Projekt 5 -->
			<label class="box" for="projekt-5">
				<img src="/images/stuff.liu.se.png" alt="stuff" height="350px" />
				<div class="projekt-info">
					<h4>Stuff Hemsidan</h4>
					<p>Studentkåren för utbildningsvetenskap och Filosofisk fakultet (StuFF)</p>
					<input type="checkbox" id="toggle-5" />
					<div class="hidden-content">
						<p>
							Studentkåren för utbildningsvetenskap och Filosofisk fakultet (StuFF) är den största studentrösten vid Linköpings universitet och företräder
							nästan 20 000 studenter i Linköping och Norrköping.
						</p>
					</div>
					<label onclick={toggle_read_mode} class="toggle-label" for="toggle-5">{read_mode}</label>
				</div>
			</label>
		</div>
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
	.projekt {
		position: center;
		width: 100%;
		max-width: 800px;
		margin: auto;
		padding: 2px;
	}

	.center-text {
		text-align: center;
		margin-bottom: 50px;
	}

	.center-text h1 {
		font-size: 22px;
		font-weight: 600;
		color: var(--text-color);
		text-transform: uppercase;
		letter-spacing: 6px;
		margin-bottom: 20px;
	}

	/*----- Kodvet Projekt -----*/
	.kodvet_projekt {
		margin-left: 10%;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 750px;
	}

	.box {
		position: absolute;
		width: 60%;
		height: 100%;
		transition:
			transform 0.4s ease,
			opacity 0.4s ease;
		opacity: 0.9;
		cursor: pointer;
	}

	.box img {
		width: 80%; /* Gör bilden lika bred som boxen */
		height: 450px;
		object-fit: cover;
		border-radius: 10px;
		box-shadow: 0 0 25px #ffffff2d;
		object-position: top;
	}

	#projekt-1:checked ~ .kodvet_projekt .box:nth-child(1),
	#projekt-2:checked ~ .kodvet_projekt .box:nth-child(2),
	#projekt-3:checked ~ .kodvet_projekt .box:nth-child(3),
	#projekt-4:checked ~ .kodvet_projekt .box:nth-child(4),
	#projekt-5:checked ~ .kodvet_projekt .box:nth-child(5) {
		transform: translateX(0) scale(1);
		opacity: 1;
		z-index: 2;
	}

	#projekt-1:checked ~ .kodvet_projekt .box:nth-child(2),
	#projekt-2:checked ~ .kodvet_projekt .box:nth-child(3),
	#projekt-3:checked ~ .kodvet_projekt .box:nth-child(4),
	#projekt-4:checked ~ .kodvet_projekt .box:nth-child(5),
	#projekt-5:checked ~ .kodvet_projekt .box:nth-child(1) {
		transform: translateX(60%) scale(0.7);
		opacity: 0.2;
		z-index: 1;
	}

	#projekt-1:checked ~ .kodvet_projekt .box:nth-child(5),
	#projekt-2:checked ~ .kodvet_projekt .box:nth-child(1),
	#projekt-3:checked ~ .kodvet_projekt .box:nth-child(2),
	#projekt-4:checked ~ .kodvet_projekt .box:nth-child(3),
	#projekt-5:checked ~ .kodvet_projekt .box:nth-child(4) {
		transform: translateX(-60%) scale(0.7);
		opacity: 0.6;
		z-index: 1;
	}

	.kodvet_projekt .box {
		opacity: 0;
		z-index: 0;
	}

	input[type='radio'] {
		display: none;
	}

	.projekt-info {
		position: relative;
		width: 80%;
		background: #ffff;
		color: #0c0c0c;
		padding: 10px;
		border-radius: 8px;
		text-align: center;
		margin-top: 10px;
		opacity: 0;
		transition: opacity 0.4s ease;
	}

	.projekt-info h4 {
		margin-bottom: 3%;
	}

	#projekt-1:checked ~ .kodvet_projekt .box:nth-child(1) .projekt-info,
	#projekt-2:checked ~ .kodvet_projekt .box:nth-child(2) .projekt-info,
	#projekt-3:checked ~ .kodvet_projekt .box:nth-child(3) .projekt-info,
	#projekt-4:checked ~ .kodvet_projekt .box:nth-child(4) .projekt-info,
	#projekt-5:checked ~ .kodvet_projekt .box:nth-child(5) .projekt-info {
		opacity: 1;
	}

	.kodvet_projekt .box .projekt-info {
		opacity: 0;
	}
	.hidden-content {
		display: none;
		font-size: 14px;
		color: #000000;
		margin-top: 10px;
	}

	input[type='checkbox']:checked ~ .hidden-content {
		display: block;
	}

	.toggle-label {
		display: inline-block;
		margin-top: 10px;
		font-size: 14px;
		color: #007bff;
		cursor: pointer;
		text-decoration: underline;
	}

	input[type='checkbox'] {
		display: none;
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
		z-index: 2;
		pointer-events: none;
	}

	.prev {
		left: 110px;
		transition:
			ease 0,
			1s;
	}

	.next {
		right: 110px;
		transition:
			ease 0,
			1s;
	}

	.prev:hover,
	.next:hover {
		color: #fff;
	}

	.kodvet_project_wrapper {
		position: relative;
	}
	@media (max-width: 600px) {
		.box img {
			height: 200px;
		}
		.kodvet_projekt {
			margin-left: 10%;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 450px;
		}

		.hidden-content {
			display: none;
			font-size: 10px;
			color: #000000;
			margin-top: 10px;
		}
		.prev,
		.next {
			font-size: 20px;
			margin-top: -50px;
		}
		.prev {
			left: 20px;
		}
		.next {
			right: 20px;
		}

		.center-text h1 {
			font-size: 14px;
		}
		.center-text p {
			font-size: 12px;
		}
		.projekt-info p {
			font-size: 10px;
		}
		.projekt-info h4 {
			font-size: 14px;
		}
	}
</style>
