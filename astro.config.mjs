// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel"; // Importar el adaptador de Vercel

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  adapter: vercel(), // Agregar el adaptador de Vercel
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  output: "server",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
