import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl'
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap()
  ],
  site: 'https://andresjpulido.com',
  base: '/' ,
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});