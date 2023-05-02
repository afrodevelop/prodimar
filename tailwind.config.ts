import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Gordita', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          50: "#6257b3",
          100: "#584da9",
          200: "#4e439f",
          300: "#443995",
          400: "#3a2f8b",
          500: "#302581",
          600: "#261b77",
          700: "#1c116d",
          800: "#120763",
          900: "#080059"
        },
        secondary: {
          50: "#ffff33",
          100: "#ffff29",
          200: "#ffff1f",
          300: "#fff915",
          400: "#ffef0b",
          500: "#f6e501",
          600: "#ecdb00",
          700: "#e2d100",
          800: "#d8c700",
          900: "#cebd00"
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
