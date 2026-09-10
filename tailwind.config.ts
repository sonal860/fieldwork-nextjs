import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12172B",
        "ink-soft": "#2A3050",
        paper: "#FAFAF8",
        "paper-dim": "#F0EEE7",
        signal: "#2E5EFF",
        coral: "#FF6F59",
        line: "rgba(18,23,43,0.1)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-ibm-plex)", "sans-serif"],
      },
      maxWidth: {
        wrap: "1160px",
      },
    },
  },
  plugins: [],
};
export default config;
