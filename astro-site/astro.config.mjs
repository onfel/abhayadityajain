// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://abhayadityajain.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  },
  redirects: {
    '/about-me.html': '/about-me',
    '/ledger.html': '/ledger',
    '/laurus-labs.html': '/laurus-labs',
    '/motilal-oswal.html': '/motilal-oswal',
    '/solara-active.html': '/solara-active',
    '/digital-disorder.html': '/digital-disorder'
  }
});
