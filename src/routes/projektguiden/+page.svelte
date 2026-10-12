<!-- Todo: -->
<!-- placeholder image on projects that do not have a coverimg. -->
<!-- fix general errors/warnings when building-->
<script lang="ts">
import { marked } from 'marked';
import { goto } from '$app/navigation';
import { page } from '$app/state';
import type { Project } from './project-types';
import ProjectCard from './components/ProjectCard.svelte';
import ProjectModal from './components/ProjectModal.svelte';

import { createProjects } from './projects';

const markdownFiles = import.meta.glob('./projekt/**/index.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

const projectFiles = import.meta.glob('./projekt/**/files/*', {
	query: '?url',
	import: 'default',
	eager: true
}) as Record<string, string>;

const projects = createProjects(markdownFiles, projectFiles);


 
let activeSlug = $state<string | null>(null);
let activeProject = $derived(projects.find((p) => p.slug === activeSlug) ?? null);

// wrapped in effect to allow pre-render of website
$effect(() => {
	activeSlug = page.url.searchParams.get('project');
});

// make the background page unscrollable when modal is active
$effect(() => {
	document.body.style.overflow = activeProject ? 'hidden' : '';
	return () => {
		// safety net cleanup if page gets reloaded while modal is active
		document.body.style.overflow = '';
	};
});

function openProject(slug: string) {
	const url = new URL(page.url);
	url.searchParams.set('project', slug);
	goto(`${url.pathname}${url.search}`, { keepFocus: true, noScroll: true });
}

function closeProject() {
	const url = new URL(page.url);
	url.searchParams.delete('project');
	goto(`${url.pathname}${url.search}`, { keepFocus: true, noScroll: true });
}

function handleKeydown(event: KeyboardEvent) {
	if (event.key === 'Escape' && activeProject) {
		closeProject();
	}
}

function renderProjectMarkdown(project: Project): string {
	const renderer = new marked.Renderer();

	const resolvePath = (project: Project, path: string) => {
		const filePath = `./projekt/${project.slug}/files/${path.slice('./files/'.length)}`;
		return projectFiles[filePath] ?? path;
	}

	// hacks to overwrite relative urls so they point to the right url.
	renderer.image = ({ href, title, text }) => {
		if (href.startsWith('./files')) {
			href = resolvePath(project, href);
		}

		return `<img src="${href}" alt="${text}"${
			title ? ` title="${title}"` : ''
		}>`;
	};

	renderer.html = ({ text }) => {
		return text.replace(
			// regex from llm to find "./files/" in img elements src attribute
			/(<img\b[^>]*\bsrc=["'])(\.\/files\/[^"']+)(["'])/gi,
			(_match, prefix, path, suffix) =>
				`${prefix}${resolvePath(project, path)}${suffix}`
		);
	};

	return marked.parse(project.description, { renderer }) as string;
}


</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
	<title>kodVet ProjektGuide</title>
	<meta property="og:title" content="Filfaks enda programmeringsutskott" />
	<meta property="og:site_name" content="kodVet" />
	<meta property="og:locale" content="sv" />
	<meta property="og:description" content="KodVet är ett utskott till sektionen för kognitionsvetenskap på LiU och filfaks enda programmeringsutskott!" />
	<meta property="og:url" content="https://kodvet.kogvet.se" />
	<meta property="og:image" content="/images/kodvet_logo_rund_indigo_bla.png" />

</svelte:head>

<div class="page">
	<div class="margin"></div>
	<h1>kodVets Projektguide</h1>
	<div id="guideDesc">
		<div id="guideDescLeft">
			<h2>Kom igång!</h2>
			<p>Vill du lära dig mer programmering utöver vad du får lära dig på labbuppgifter i plugget? Det bästa sättet att lära sig är genom större projekt du själv tycker är kul! Därför har vi gjord en lista med olika ideér & relevanta resurser. Du kommer behöva söka upp många saker själv, men det är en viktig del av programmering!</p>
		</div>
		<div id="guideDescMiddle">
			<img width=200 src="images/cody_kaffe.png" alt="Cody med en kaffekopp">
		</div>
		<div id="guideDescRight">
			<h2>Råd</h2>
			<div id="guideDescRightContent">
				<p>Det är viktigt att begänsa sig och bestämma tydligt vad som ska finnas med och vad som inte ska. Om det inte finns några tydliga mål eller projektet är för ambitiöst kan det bli svårt att komma igång. Tänk därför ut en första så kallad minimum viable product (<a href="https://en.wikipedia.org/wiki/Minimum_viable_product">MVP</a>) och jobba dig därifrån.</p>
				<p>Vad gäller användning av AI tar du såklart eget ansvar för ditt lärande. Ett tips är att ställa mer allmäna frågor. Till exempel. <strong>Fråga:</strong> "Hur läser man in en fil i python?", <strong>inte:</strong> "Skriv kod som öppnar en fil "data.txt" och omvandlar varannan rad till [...]". En rekommendation är att i stor usträckning bara använda sidor från google (t.ex. stackoverflow är väldigt bra) eftersom de ger svar som måste bearbetas och omvandlas så de passar just din kod. I regel kan man också utgå från <a href="https://www.ida.liu.se/~729G46/tips/genai/#howto">introproggens råd ang. AI-användning</a>.</p>
			</div>

		</div>

	</div>

	<h2 class="sectionHeader">Nivå 1</h2><hr>
	<div class="projectsContainer">
		{#each projects as project (project.slug)}
			{#if project.difficulty == "1" && !project.hidden}
				<ProjectCard project={project} {openProject}/>
			{/if}
		{/each}
	</div>
	<h2 class="sectionHeader">Nivå 2</h2><hr>
	<div class="projectsContainer">
		{#each projects as project (project.slug)}
			{#if project.difficulty == "2" && !project.hidden}
				<ProjectCard project={project} {openProject}/>
			{/if}
		{/each}
	</div>
	<h2 class="sectionHeader">Nivå 3</h2><hr>
	<div class="projectsContainer">
		{#each projects as project (project.slug)}
			{#if project.difficulty == "3" && !project.hidden}
				<ProjectCard project={project} {openProject}/>
			{/if}
		{/each}
	</div>

	{#if activeProject}
		<ProjectModal project={activeProject} {closeProject} {renderProjectMarkdown}/>
	{/if}
</div>



<style>
.page {
	--bg-surface: #1c211f;
	--bg-surface-raised: #232a26;
	--border: #303a33;
	--text: #eef1ee;
	--text-muted: #93a89c;
	--accent: #16a654;
	--accent-strong: #29d074;
	--accent-soft: rgba(22, 166, 84, 0.14);
	--shadow: rgba(4, 12, 8, 0.55);

	color: #D4D4D4;
	padding: 80px;
	padding-top: 0px;
}

:global(a) {
	color: var(--accent-strong);
}

.margin {
	height: 65px;
}

#guideDesc {
	display: flex;
	flex-direction: row;
	line-height: 1.4;
	align-items: flex-start;
	gap: 2rem;
	width: 100%;
}
#guideDescLeft {
	flex: 1 1 0;
	min-width: 0;
	max-width: 500px;
}
#guideDescRight {
	flex: 1 1 0;
	min-width: 0;
}
#guideDescRightContent {
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
}
#guideDescRightContent > p {
	flex: 1 1 280px;
	min-width: 0;
	margin-top: 0;
}


#guideDescMiddle {
	flex: 0 0 200px;
}

hr {
	color: #16A654;
	border: none;
	border-top: 2px solid var(--accent);

}


.sectionHeader {
	margin-bottom: 0;
}
.projectsContainer {
	display: grid;
	grid-template-columns: repeat(auto-fill, 300px);
	/* background-color: blue; */
	column-gap: 100px;
}


@media (max-width: 768px) {
	.page {
		padding: 20px;
		padding-top: 0px;
	}

	#guideDesc {
	flex-direction: column;
	}

	#guideDescLeft,
	#guideDescMiddle,
	#guideDescRight {
		width: 100%;
		flex: auto;
	}

	#guideDescMiddle {
		justify-content: flex-start;
	}

	#guideDescRightContent {
		display: block;
		flex-direction: column;
	}

	.projectsContainer {
		justify-content: center;
	}

}

</style>
