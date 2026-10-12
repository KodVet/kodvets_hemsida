import * as matter from 'gray-matter-es';
import type { Project } from './project-types';

export function createProjects(
	markdownFiles: Record<string, string>,
	projectFiles: Record<string, string>
): Project[] {
	return Object.entries(markdownFiles).map(([path, rawMarkdown]) => {

		const { data, content } = matter.matter(rawMarkdown);

		// ./projekt/conways-game-of-life/index.md
		const match = path.match(/^\.\/projekt\/([^/]+)\/index\.md$/);

		if (!match) {
			throw new Error(`Invalid project path: ${path}`);
		}

		const slug = match[1];



		const coverImages = Object.entries(projectFiles)
			.filter(([filePath]) =>
				filePath.startsWith(`./projekt/${slug}/files/cover`)
			)
			.map(([, url]) => url);

		const coverImg = coverImages[0];

		const attachments = Object.entries(projectFiles)
			.filter(([filePath, url]) =>
				filePath.startsWith(`./projekt/${slug}/files/`)
				&& url != coverImg
			)
			.map(([filePath, url]) => ({
				name: filePath.split('/').pop() as string,
				url
			}))
			.sort((a, b) => a.name.localeCompare(b.name));


		// console.log("attachments:", attachments)
		// console.log("coverImg:", coverImg)
		// console.log("printhing:")
		// console.log(Object.entries(projectFiles));


		return {
			slug,
			title: data.title ?? slug,
			tags: data.tags ?? [],
			difficulty: data.difficulty,
			description: content,
			coverImg: coverImg,
			attachments: attachments,
			hidden: data.hidden ?? false
		};
	});
}
