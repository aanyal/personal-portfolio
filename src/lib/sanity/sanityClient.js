import { createClient } from '@sanity/client';
import {PROJECT_ID} from './projectId.js';

export const client = createClient({
  projectId: PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-10-01',
  useCdn: true,
});