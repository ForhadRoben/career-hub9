/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0e43b5",

          "secondary": "#d5ccff",

          "accent": "#5315ef",

          "neutral": "#282E39",

          "base-100": "#FBF9FB",

          "info": "#5B86EC",

          "success": "#3CE2B8",

          "warning": "#8E4C0B",

          "error": "#F1133F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

