import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/sanityClient.js';
import { defineQuery } from 'groq';

const fetchPage = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;

	const pageQuery = defineQuery(`
		*[_type == "project" && slug.current == $slug][0] {
			_id, 
			title, 
			slug, 
			projectType, 
			startDate, 
			endDate,
			skills,
			cover,
			content
		}
  	`);

	const projectData = await client.fetch(pageQuery, {
		slug
	});

	if (projectData == null) {
		throw Error('Project data is null.');
	}

	return projectData;
};

export const load: PageServerLoad = async ({ params: { slug } }) => {
	const data = await fetchPage({ params: { slug: slug } });

	return {
		pageData: data,
	};
};
