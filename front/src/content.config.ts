import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const trayectoria = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trayectoria' }),
  schema: z.object({
    title: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    details: z.array(z.string()),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    pubDate: z.coerce.date(),
    image: z.string(),
    sourceUrl: z.string().url().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { trayectoria, blog };
