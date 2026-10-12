<script lang="ts">
	import type { Project } from '../project-types';

	let {
		project,
		closeProject,
		renderProjectMarkdown
	}: {
		project: Project,
		closeProject: () => void;
		renderProjectMarkdown: (projet: Project) => string;
	} = $props();
</script>


<div class="modalOverlay" >
  	<button
  		class="modalBackdrop"
  		type="button"
  		aria-label="Stäng projekt"
  		onclick={closeProject}
  	></button>

	<div
		class="modalPanel"
		role="dialog"
		aria-modal="true"
		aria-labelledby="modalTitle"
		tabindex="-1"
		{@attach (node) => node.focus()}
	>
		<button class="modalClose" onclick={closeProject} aria-label="Stäng">✕</button>

		{#if project.coverImg}
			<img class="modalImage" src={project.coverImg} alt="" />
		{/if}

		<div class="modalBody">
			<h2 id="modalTitle">{project.title}</h2>

			{#if project.tags.length > 0}
				<div class="tagRow">
					{#each project.tags as tag, idx (idx) }
						<span class="tag">{tag}</span>
					{/each}
				</div>
			{/if}

			{#if project.difficulty}
				<div class="modalMeta">
					{#if project.difficulty}
						<span>Nivå <strong>{project.difficulty}</strong></span>
					{/if}
				</div>
			{/if}

			<div class="markdown">
				{@html renderProjectMarkdown(project)}
			</div>



			{#if project.attachments.length > 0}
				<div class="fileList">
					<h3>Assoscierade filer</h3>
					<ul>
						{#each project.attachments as file (file.url)}
							<li>
								<a href={file.url} download={file.name}>{file.name}</a>
							</li>
						{/each}
					</ul>
				</div>
			{/if}

		</div>
	</div>
</div>


<style>
.tagRow {
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
	margin-top: 8px;
}
.tag {
	font-family: var(--font-mono);
	font-size: 0.75rem;
	padding: 3px 10px;
	border-radius: 999px;
	background: var(--accent-soft);
	border: 1px solid rgba(22, 166, 84, 0.35);
	color: var(--accent-strong);
}


.modalOverlay {
	position: fixed;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 24px;
	z-index: 100;
	animation: overlayIn 0.18s ease-out;
}

.modalBackdrop {
	position: absolute;
	inset: 0;
	border: 0;
	background: rgba(8, 10, 9, 0.72);
	backdrop-filter: blur(6px);
	cursor: default;
}

.modalPanel {
	position: relative;
	z-index: 1;
	width: 100%;
	max-width: 860px;
	max-height: 88vh;
	overflow-y: auto;
	background: var(--bg-surface);
	border: 1px solid var(--border);
	border-radius: 14px;
	box-shadow: 0 24px 60px var(--shadow);
	animation: modalIn 0.22s ease-out;
}


.modalPanel:focus-visible {
	outline: none;
}

.modalClose {
	position: absolute;
	top: 12px;
	right: 12px;
	width: 32px;
	height: 32px;
	border-radius: 50%;
	border: 1px solid var(--border);
	background: var(--bg-surface-raised);
	color: var(--text);
	font-size: 1rem;
	line-height: 1;
	cursor: pointer;
	z-index: 1;
}
.modalClose:hover,
.modalClose:focus-visible {
	border-color: var(--accent);
	color: var(--accent-strong);
}

.modalImage {
	width: 100%;
	height: 240px;
	object-fit: cover;
	display: block;
	border-radius: 14px 14px 0 0;
}

.modalBody {
	padding: 28px 28px 32px;
	color: var(--text);
}
.modalBody h2 {
	font-weight: 700;
	font-size: 1.6rem;
	margin: 0 0 12px;
}

.modalMeta {
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	margin: 14px 0;
	font-size: 0.85rem;
	color: var(--text-muted);
}
.modalMeta strong {
	color: var(--text);
}

.markdown {
	margin-top: 18px;
	font-size: 1.15rem;
	line-height: 1.6;
	color: var(--text);
}
.markdown :global(h1),
.markdown :global(h2),
.markdown :global(h3),
.markdown :global(h4),
.markdown :global(h5),
.markdown :global(h6) {
	color: var(--text);
}
.markdown :global(a) {
	color: var(--accent-strong);
}
.markdown :global(code) {
	background: var(--bg-surface-raised);
	border: 1px solid var(--border);
	border-radius: 4px;
	padding: 1px 5px;
}
.markdown :global(pre) {
	background: var(--bg-surface-raised);
	border: 1px solid var(--border);
	border-radius: 8px;
	padding: 14px;
	overflow-x: auto;
}

@keyframes overlayIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
@keyframes modalIn {
	from {
		opacity: 0;
		transform: translateY(14px) scale(0.98);
	}
	to {
		opacity: 1;
		transform: none;
	}
}
@media (prefers-reduced-motion: reduce) {
	.modalOverlay,
	.modalPanel {
		animation: none;
	}
}

@media (max-width: 480px) {
	.modalBody {
		padding: 20px;
	}
}
</style>
