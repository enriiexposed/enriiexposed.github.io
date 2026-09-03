import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const trayectoria = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trayectoria' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    details: z.array(z.string()),
  }),
});

export const collections = { trayectoria };
