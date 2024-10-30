// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site:
    process.env.VERCEL_ENV === "production"
      ? "https://greenlioninnovations.com/"
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}/`
        : "http://localhost:4321/",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
