import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nbs: {
          red: "#E4002B",
          darkred: "#8B0000",
          lightred: "#FFF1F2",
          accent: "#C10024",
          ink: "#111827",
          paper: "#FAF8F5",
          cream: "#F4F1EA",
          pill: "#B8C2CC",
          rule: "#E4E0D8",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["Montserrat", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
