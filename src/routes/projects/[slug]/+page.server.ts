import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/sanityClient.js';
import { defineQuery } from 'groq';

const fetchPage = async () => {
	const pageQuery = defineQuery(`
		*[_type == "post"] | order(date desc) {
			_id,
			title,
			startDate,
			endDate,
			skills,
			slug,
		}
  	`);

	const newsPage = await client.fetch(pageQuery);

	if (newsPage == null) {
		throw Error('News page data is null.');
	}

	return newsPage;
};

export const load: PageServerLoad = async () => {
	const data = await fetchPage();

	console.log(data[0].title);

	return {
		pageData: data,
	};
};
