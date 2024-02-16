import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alternate: ['"Montserrat Alternates"', "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        open: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
