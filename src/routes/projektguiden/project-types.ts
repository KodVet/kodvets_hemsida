export type Project = {
	slug: string;
	title: string;
	tags: string[];
	difficulty?: string;
	description: string;
	coverImg: string | null;
	attachments: { name: string; url: string }[];
};
