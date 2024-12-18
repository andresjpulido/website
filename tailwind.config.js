/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"], 
  theme: {
    extend: {},
    fontFamily: {
      'sans': ["Helvetica", "ui-sans-serif", "system-ui"],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'serif': ['ui-serif', 'Georgia'],
      poppins: ["poppins", "sans-serif"],
      poppinsblack: ["poppinsblack", "sans-serif"],
      poppinsbold: ["poppinsbold", "sans-serif"],
      poppinsextrabold: ["poppinsextrabold", "sans-serif"],
      computerfont: ["computerfont"],
    },
    backgroundImage: {
      "desktop": "url('/images/desktop.png')",
    },
    colors: {
      one: "#0d0d0d",
      two: "#f7f7f7",
      three: "#1E88E5",
      four: "#333",
      five: "#ef7a05",
      six: "#66A4A5",
      seven: "#3F433F",
      eight: "#D3E7E8",
      nine: "#B4B4B4",
      ten: "#ABABAB", 
    },
  },
  plugins: [],
};
