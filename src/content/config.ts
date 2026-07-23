import { defineCollection, z } from "astro:content";

const CATEGORY_ENUM = [
  "rar-technologies",
  "web-and-product-development",
  "robotics-and-embedded-systems",
  "electrical-engineering",
  "aerospace-and-rocketry",
  "teaching-and-leadership",
] as const;

const STATUS_ENUM = ["shipped", "ongoing", "archived", "prototype", "concept"] as const;

const galleryItem = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
});

// External-link record (with a required label so the sidebar can render it).
const externalLink = z.object({
  label: z.string(),
  href: z.string().url(),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string().optional(),
      summary: z.string().min(20).max(280),
      category: z.enum(CATEGORY_ENUM),
      featured: z.boolean().default(false),
      year: z.union([z.number(), z.string()]),
      role: z.string(),
      collaborators: z.array(z.string()).default([]),
      technologies: z.array(z.string()).default([]),
      hardware: z.array(z.string()).default([]),
      // The narrative chapters — every one is optional. Templates skip
      // any chapter that isn't present, so nothing labelled "TODO" ever
      // renders in the public build.
      problem: z.string().optional(),
      process: z.string().optional(),
      challenges: z.string().optional(),
      solution: z.string().optional(),
      results: z.string().optional(),
      lessons: z.string().optional(),
      cover: z.union([image(), z.object({ src: z.string(), alt: z.string() })]).optional(),
      gallery: z.array(galleryItem).default([]),
      liveUrl: z.string().url().optional(),
      githubUrl: z.string().url().optional(),
      references: z.array(externalLink).default([]),
      status: z.enum(STATUS_ENUM).default("shipped"),
      order: z.number().default(0),
    }),
});

export const collections = { projects };
export const CATEGORY_KEYS = CATEGORY_ENUM;
export type Category = (typeof CATEGORY_ENUM)[number];
export type ProjectStatus = (typeof STATUS_ENUM)[number];
