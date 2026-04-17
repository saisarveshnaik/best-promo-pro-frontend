import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#121212",
        muted: "#7e7e7e",
        lightBg: "#f4f4f4",
        line: "#e7e7e7",
        accent: "#e62e57",
        deep: "#0b1320",
      },
      boxShadow: {
        soft: "0 2px 18px rgba(11, 19, 32, 0.06)",
      },
      fontFamily: {
        jakarta: ["Jost", "sans-serif"],
      },
      maxWidth: {
        page: "1620px",
      },
    },
  },
  plugins: [],
};

export default config;
