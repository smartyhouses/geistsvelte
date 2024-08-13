import type { MetaTagsProps } from 'svelte-meta-tags';

export function load() {
	const title = 'Switch';
	const description = 'Choose between a set of options.';

	const pageMetaTags = Object.freeze({
		title,
		description,
		openGraph: {
			title,
			description
		}
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags,
		title,
		description
	};
}
