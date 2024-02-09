import { z, defineCollection } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  'articles': articlesCollection,
};
