# Astro Site Deployment Guide

## 🚀 Build & Deploy

### Local Development
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

### Production Deployment

Your Astro site builds to static files in `dist/` folder. Deploy this folder to any static hosting:

#### Option 1: GitHub Pages
1. Push this `astro-site` folder to your repository
2. Go to Settings > Pages
3. Set source to GitHub Actions
4. Use this workflow (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: 'astro-site/package-lock.json'
      - name: Install dependencies
        run: npm ci
        working-directory: astro-site
      - name: Build
        run: npm run build
        working-directory: astro-site
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: astro-site/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Point to the `astro-site` directory

#### Option 3: Netlify
1. Drag `dist` folder to netlify.com
2. Or connect GitHub repo with build command: `npm run build` and publish directory: `dist`

## 🔄 Migration Completed

### What's Been Converted
✅ **Homepage** - Modern Astro with all SEO preserved
✅ **About page** - Clean component structure
✅ **Ledger page** - Blog index with modern routing
✅ **Blog posts** - Markdown-based content system
✅ **SEO & Meta tags** - All original SEO preserved
✅ **Structured data** - Schema.org markup maintained
✅ **Analytics** - Google Analytics preserved
✅ **Clean URLs** - `/about-me` instead of `/about-me.html`

### Benefits You Now Have
🚀 **Developer Experience**
- Write posts in Markdown instead of HTML
- Reusable components for consistent design
- Hot reload during development
- TypeScript support

📈 **Performance & SEO**
- Faster loading times
- Automatic optimization
- Clean URLs without file extensions
- Better Core Web Vitals scores

🔧 **Maintenance**
- Single source of truth for layouts
- Easy to add new blog posts
- Version control friendly
- Modern tooling

### File Structure
```
astro-site/
├── src/
│   ├── components/          # Reusable components
│   │   └── Navigation.astro
│   ├── layouts/            # Page layouts
│   │   ├── Layout.astro    # Base layout
│   │   └── BlogPost.astro  # Blog post layout
│   ├── pages/              # File-based routing
│   │   ├── index.astro     # Homepage
│   │   ├── about-me.astro  # About page
│   │   ├── ledger.astro    # Blog index
│   │   └── [...slug].astro # Dynamic blog routes
│   └── content/            # Content collections
│       ├── config.ts       # Content schema
│       └── blog/           # Blog posts in Markdown
│           └── digital-disorder.md
├── public/                 # Static assets
│   ├── robots.txt
│   └── sitemap.xml
└── astro.config.mjs       # Astro configuration
```

### Adding New Blog Posts
1. Create `src/content/blog/new-post.md`
2. Add frontmatter:
```yaml
---
title: "Your Post Title"
description: "Post description for SEO"
keywords: "keyword1, keyword2, keyword3"
publishedTime: "2025-01-20"
author: "Abhay Aditya Jain"
section: "Thoughts" # or "Equities"
---
```
3. Write content in Markdown
4. Build and deploy

Your site is now modernized while preserving all your excellent SEO work!