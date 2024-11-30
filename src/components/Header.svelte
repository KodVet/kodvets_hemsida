<script lang="ts"></script>

<header id="header">
	<nav>
		<div class="navToggleButton">
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</div>
		<ul>
			<div class="menu left">
				<li>
					<a href="#about" class="menu-item"> Om oss </a>
				</li>
				<li>
					<a href="#projects" class="menu-item"> Projekt </a>
				</li>
			</div>
			<li>
				<a href="#hero">
					<img src="/images/logo-center.png" alt="Kodvet logo" id="logo" />
				</a>
			</li>
			<div class="menu right">
				<li>
					<a href="#members" class="menu-item"> Medlemmar </a>
				</li>
				<li>
					<a href="#contact" class="menu-item"> Kontakt </a>
				</li>
			</div>
		</ul>
	</nav>
</header>

<style>
	header {
		background: #313131;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		font-size: 16px;
		height: 120px;
		font-weight: 700;
		margin: 0;
		position: -webkit-sticky;
		position: fixed;
		width: 100%;
		top: 0;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		z-index: 100;
	}

	.menu {
		height: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-ms-flex-pack: distribute;
		justify-content: space-around;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-column-gap: 20px;
		column-gap: 20px;
		max-width: 200px;
	}

	nav {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		height: 100%;
	}

	nav ul {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		-ms-flex-pack: distribute;
		justify-content: space-around;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-column-gap: 30px;
		column-gap: 30px;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		max-width: 720px;
		min-width: 350px;
		list-style: none;
		padding: 0;
		height: 100%;
	}

	nav a {
		text-decoration: none;
		color: white;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	#logo {
		-webkit-transition: all 0.4s;
		transition: all 0.4s;
		margin-top: 8px;
	}

	@media screen and (max-width: 768px) {
		.navToggleButton .bar {
			width: 25px;
			height: 3px;
			margin: 5px auto;
			-webkit-transition: all 0.5s ease-in-out;
			transition: all 0.5s ease-in-out;
			background: white;
		}
	}
</style>
