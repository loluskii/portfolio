// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.adelore.dev',
  devToolbar: { enabled: false },
  redirects: {
    '/about': '/#about',
    '/contact': '/#contact',
    '/services': '/#work',
    '/work': '/#work',
  },
});
