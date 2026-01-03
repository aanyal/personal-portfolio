import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/sanityClient.js';
import { defineQuery } from 'groq';

const fetchPage = async () => {
	const pageQuery = defineQuery(`
		*[_type == "project"] {
			_id, 
			title, 
			slug, 
			projectType, 
			startDate, 
			endDate,
			skills,
			cover,
			content,
			assetsPath,
			overview
		}
  	`);

	const projectData = await client.fetch(pageQuery, {});

	if (projectData == null) {
		throw Error('Project data is null.');
	}

	return projectData;
};

export const load: PageServerLoad = async () => {
	const data = await fetchPage();
	
	return {data};
};
