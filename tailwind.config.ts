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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#3b82f6", // Electric Blue
          glow: "rgba(59, 130, 246, 0.4)",
        },
        secondary: {
          DEFAULT: "#8b5cf6", // Vibrant Violet
          glow: "rgba(139, 92, 246, 0.4)",
        },
        card: "rgba(24, 24, 27, 0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
