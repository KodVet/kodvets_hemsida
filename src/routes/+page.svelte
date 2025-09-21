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
	<meta property="og:image" content="images/kodvet_logo_rund_indigo_bla.png" />
</svelte:head>

<Hero></Hero>
<Omoss></Omoss>
<Projekt></Projekt>
<Contact></Contact>

<style>
</style>
