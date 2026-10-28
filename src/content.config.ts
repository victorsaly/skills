// Why: one Markdown file per skill. The hub lists them from here, so a new skill is one new file (and, when it
// wants its own landing page, one page in src/pages).
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const skills = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/skills' }),
  schema: z.object({
    name: z.string().min(1).max(40),
    tagline: z.string().min(1).max(80),
    summary: z.string().min(1).max(280),
    repo: z.string().url(),
    install: z.string().min(1),
    order: z.number().int(),
  }),
});

export const collections = { skills };
