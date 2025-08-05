import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.string(),
    publishedTime: z.string(),
    author: z.string().default('Abhay Aditya Jain'),
    section: z.string(),
    ogType: z.literal('article').default('article'),
    twitterCreator: z.string().default('@abhayadityajain')
  })
})

export const collections = {
  blog
}