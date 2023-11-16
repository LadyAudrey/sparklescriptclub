import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      pink1: "#D890AF",
      pink2: "#b45a81",
      pink3: "#90305a",
      pink4: "#6c1239",
      pink5: "#480020",
      orange0: "#EBDDD5",
      orange1: "#ffc8aa",
      orange2: "#d48f6a",
      orange3: "#aa6039",
      orange4: "#80a15",
      orange5: "#551e00",
      aqua1: "#70a897",
      aqua2: "#468c77",
      aqua3: "#25705a",
      aqua4: "#0e543f",
      aqua5: "#003827",
      lime1: "#c9ea9c",
      lime2: "#9ac361",
      lime3: "#709c34",
      lime4: "#4c7513",
      lime5: "#2d4e00",
      black: "000",
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
