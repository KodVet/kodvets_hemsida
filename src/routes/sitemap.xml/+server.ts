import * as sitemap from 'super-sitemap';
import type { RequestHandler } from '@sveltejs/kit';
import { entries } from '../variants/[variant]/+page.js';

export const prerender = true;

export const GET: RequestHandler = async () => {
	// Get variant values from the entries function
	const variantEntries = entries();
	const variants = variantEntries.map((entry) => entry.variant);

	return await sitemap.response({
		origin: 'https://kodvet.kogvet.se',
		paramValues: {
			'/variants/[variant]': variants
		}
	});
};
