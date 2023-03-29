/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8c00dd",

          secondary: "#62d6a9",

          accent: "#4ea4ba",

          neutral: "#15151E",

          "base-100": "#2C3558",

          info: "#697EE8",

          success: "#18905E",

          warning: "#E5AE0B",

          error: "#F12753",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
