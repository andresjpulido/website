import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown'
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(), 
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  site: "https://andresjpulido.com",
  base: "/",
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
