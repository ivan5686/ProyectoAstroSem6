import { defineCollection, z } from "astro:content";


import { glob, file } from "astro/loaders";

const posts = defineCollection({
  type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date().optional(),
       
    }),
});

export const collections = {
  posts };