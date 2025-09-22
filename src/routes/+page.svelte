<script lang="ts">
	import Hero from '$components/Hero.svelte';
	import Omoss from '$components/Omoss.svelte';
	import Projekt from '$components/Projekt.svelte';
	import Contact from '$components/Contact.svelte';
</script>

<svelte:head>
	<title>kodVet</title>
	<meta property="og:title" content="Filfaks enda programmeringsutskott" />
	<meta property="og:site_name" content="kodVet" />
	<meta property="og:locale" content="sv" />
	<meta property="og:description" content="KodVet är ett utskott till sektionen för kognitionsvetenskap på LiU och filfaks enda programmeringsutskott!" />
	<meta property="og:url" content="https://kodvet.kogvet.se" />
	<meta property="og:image" content="/images/kodvet_logo_rund_indigo_bla.png" />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			"itemListElement": [
				{
					"@type": "ListItem",
					"@position": 1,
					"name": "Hem",
					"item": "https://kodvet.kogvet.se"
				},
				{
					"@type": "ListItem",
					"@position": 2,
					"name": "Joachim 24/25",
					"item": "https://kodvet.kogvet.se/variants/joachim-24-25"
				},
				{
					"@type": "ListItem",
					"@position": 3,
					"name": "Fredrik 24/25",
					"item": "https://kodvet.kogvet.se/variants/fredrik-24-25"
				},
				{
					"@type": "ListItem",
					"@position": 4,
					"name": "Bella 24/25",
					"item": "https://kodvet.kogvet.se/variants/bella-24-25"
				},
				{
					"@type": "ListItem",
					"@position": 5,
					"name": "Ellen 24/25",
					"item": "https://kodvet.kogvet.se/variants/ellen-24-25"
				},
				{
					"@type": "ListItem",
					"@position": 6,
					"name": "kodVet 21/22",
					"item": "https://kodvet.kogvet.se/variants/kodvet-21-22"
				}
			]
		}
	</script>
</svelte:head>

<Hero></Hero>
<Omoss></Omoss>
<Projekt></Projekt>
<Contact></Contact>

<style>
</style>
