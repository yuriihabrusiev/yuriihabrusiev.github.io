import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Mona Sans'", ...defaultTheme.fontFamily.sans],
        "mona-sans": ["'Mona Sans'", ...defaultTheme.fontFamily.sans],
        "hubot-sans": ["'Hubot Sans'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
