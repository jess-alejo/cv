import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const til = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/til' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    source: z.string().url().optional(),
  }),
});

const references = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/references' }),
  schema: z.object({
    category: z.string(),
    icon: z.string(),
    links: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      description: z.string().optional(),
    })),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    category: z.array(z.string()),
  }),
});

export const collections = { til, references, notes };
