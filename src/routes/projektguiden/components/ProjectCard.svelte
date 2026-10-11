<script lang="ts">
	import type { Project } from '../project-types';

	let {
		project,
		openProject,
	}: {
		project: Project,
		openProject: (slug: string) => void;
	} = $props();
</script>


<article
	class="projectCard"
	role="button"
	tabindex="0"
	aria-haspopup="dialog"
	onclick={() => openProject(project.slug)}
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			openProject(project.slug);
		}
	}}

>

	{#if project.coverImg }
		<img src={project.coverImg} alt="" />
	{/if}
	<div class="projectContent">
		<h2>{project.title}</h2>

		<div>
			{#if project.tags.length > 0}
				<div class="tagRow">
					{#each project.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
			{/if}
		</div>

	</div>

	<!-- <div class="markdown"> -->
	<!-- 	{@html marked.parse(project.description)} -->
	<!-- </div> -->
</article>

<style>
.projectCard {
	display: block;
	width: 300px;
	margin: 50px;
	padding: 20px;
	background: var(--bg-surface);
	border: 1px solid var(--border);
	border-radius: 10px;
	box-shadow: 0 4px 10px var(--shadow);
	transition:
		transform 0.2s ease,
		border-color 0.2s ease,
		box-shadow 0.2s ease;
	cursor: pointer;
	text-align: left;
}
.projectCard:hover,
.projectCard:focus-visible {
	border-color: var(--accent);
	box-shadow: 0 10px 24px var(--shadow);
	transform: translateY(-4px);
}
.projectCard:focus-visible {
	outline: 2px solid var(--accent-strong);
	outline-offset: 3px;
}
.projectCard > img {
	border-radius: 6px;
	width: 250px;
	height: 250px;
	object-fit: cover;
	display: block;
}
.projectContent {
	padding: 12px 4px 2px;
	color: var(--text);
}
.tagRow {
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
	margin-top: 8px;
}
.tag {
	font-family: 'Source Code Pro', monospace;
	font-size: 0.75rem;
	padding: 3px 10px;
	border-radius: 999px;
	background: var(--accent-soft);
	border: 1px solid rgba(22, 166, 84, 0.35);
	color: var(--accent-strong);
}

@media (max-width: 768px) {
	.projectCard {
		margin-left: 0;
	}

}

</style>
