import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "cs-0": "1px 1px 0 black",
        "cs-1": "2px 2px 0 black",
        "cs-2": "4px 4px 0 black",
        "cs-3": "6px 6px 0 black",
        "cs-4": "10px 10px 0 black",
        "cs-5": "20px 20px 0 black",
        "cs-6": "25px 25px 0 black",
      },
    },
  },
  plugins: [],
};
export default config;
