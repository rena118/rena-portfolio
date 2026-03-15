/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0B1020",
        accent: "#4f46e5",
        accentSoft: "#6366f1"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.7)"
      }
    }
  },
  plugins: []
};

