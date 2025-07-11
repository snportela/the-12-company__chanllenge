/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#4F46E5",
        "secondary-purple": "#7C3AED",
        "primary-background": "rgba(var(--primary-background))",
        "secondary-background": "rgba(var(--secondary-background))",
        "button-background": "rgba(var(--button-background))",
        "menu-border": "rgba(var(--menu-border))",
        "button-hover": "rgba(var(--button-hover))",
        "button-light": "rgba(var(--button-light))",
        "button-dark": "rgba(var(--button-dark))",
        "table-background": "rgba(var(--table-background))",
        "table-border": "rgba(var(--table-border))",
        "title-text": "rgba(var(--title-text))",
        "primary-text": "rgba(var(--primary-text))",
        "secondary-text": "rgba(var(--secondary-text))",
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
        slideinright: "slide-in-right .6s ease-in-out",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
        },
        "slide-in-right": {
          "0%": { visibility: "visible", transform: "translate3d(100%, 0, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
};
