import { defineConfig } from "astro/config"
// Import integrations
import tailwind from "@astrojs/tailwind"
import sentry from "@sentry/astro"
import spotlightjs from "@spotlightjs/astro"

// https://astro.build/config
export default defineConfig({
  site: "https://habrusiev.com",
  integrations: [sentry(), spotlightjs(), tailwind()],
})
