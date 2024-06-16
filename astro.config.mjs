import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  site: 'https://andresjpulido.github.io',
  base: '/' ,
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});