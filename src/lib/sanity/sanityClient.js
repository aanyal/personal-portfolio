import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '8qhr5ggt', // Find this in sanity.io/manage
  dataset: 'production', // Or your specific dataset name
  apiVersion: '2023-10-01', // Use a stable API version
  useCdn: true, // set to false for fresh data, true for cached
  // token: process.env.SANITY_READ_TOKEN // use if you need to fetch draft content
});