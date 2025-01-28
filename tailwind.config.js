/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#9ECE56",
        dark: "#003C58",
      },
    },
  },
  plugins: [],
};
