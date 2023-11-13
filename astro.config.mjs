import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	// comment i18 will fix rss export error
	experimental: {
    i18n: {
      defaultLocale: 'zh',
      locales: ['en', 'zh'],
      routingStrategy: 'prefix-always',
    }
  },
});
