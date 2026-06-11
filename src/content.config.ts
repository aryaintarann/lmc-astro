import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/services' }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    shortDescription: z.string().max(200),
    fullDescription: z.string(),
    icon: z.string(),
    image: z.string().optional(),
    features: z.array(z.string()),
    isEmergency: z.boolean().default(false),
    isFeatured: z.boolean().default(false),
    order: z.number(),
  }),
});

const doctors = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/doctors' }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    title: z.string(),
    specialization: z.string(),
    education: z.array(z.string()),
    languages: z.array(z.string()),
    photo: z.string(),
    schedule: z.string().optional(),
    bio: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { services, doctors };
