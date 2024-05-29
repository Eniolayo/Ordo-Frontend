/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/config/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "rgba(255, 255, 255, 0)",
      brand: {
        primary: "#03BBAD",
        "primary-100": "#04877D",
        "blue-200": "#EDF7FF",
        "blue-300": "#283593",
        "green-100": "#219653",
        "green-200": "#7FB800",
        "red-100": "#EB5757",
        "brown-100": "#9E3384",
        "gray-200": "#F4F4F4",
        "gray-300": "#D9D9D9",
        "gray-400": "#BDBDBD",
        "gray-500": "#E0E0E0",
        "gray-600": "#F2F2F2",
        "gray-700": "#6B6B6B",
        "gray-800": "#C2C2C2",

        "text-main": "#1B1C1E",
        "grey-text": "#807E7C",
      },
    },
    screens: {
      base: "0px",
      sm: "640px",
      md: "900px",
      lg: "1100px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
    },
    extend: {
      fontFamily: {
        avenirNext: ["var(--avenirNext-font)", ...fontFamily.sans],
        adobeClean: ["var(--adobeClean-font)", ...fontFamily.sans],
        firaSans: ["var(--firaSans-font)", ...fontFamily.sans],
        ubuntu: ["var(--ubuntu-font)", ...fontFamily.sans],
        circularStd: ["var(--circularStd-font)", ...fontFamily.sans],
      },
      fontSize: {
        "2xs": [
          "clamp(0.54rem, 0.54rem + 0.5vw, 0.65rem)",
          {
            lineHeight: "1rem",
          },
        ],
        xs: [
          "clamp(0.57rem, 0.57rem + 0.5vw, 0.75rem)",
          {
            lineHeight: "1rem",
          },
        ],
        "4xs": [
          "clamp(0.54rem, 0.54rem + 0.5vw, 0.8125rem)",
          {
            lineHeight: "1rem",
          },
        ],
        sm: [
          "clamp(0.72rem, 0.72rem + 0.5vw, 0.875rem)",
          {
            lineHeight: "1.25rem",
          },
        ],
        "2sm": [
          "clamp(0.66rem, 0.6rem + 0.5vw, 0.9375rem)",
          {
            lineHeight: "1.25rem",
          },
        ],
        base: [
          "clamp(0.84rem, 0.84rem + 0.5vw, 1rem)",
          {
            lineHeight: "1.5rem",
          },
        ],
        lg: [
          "clamp(0.96rem, 0.96rem + 0.5vw, 1.125rem)",
          {
            lineHeight: "1.75rem",
          },
        ],
        xlc: [
          "clamp(0.98rem, 0.98rem + 0.5vw, 1.13rem)",
          {
            lineHeight: "1.75rem",
          },
        ],
        xl: [
          "clamp(1.08rem, 1.08rem + 0.5vw, 1.25rem)",
          {
            lineHeight: "1.75rem",
          },
        ],
        "2xl": [
          "clamp(1.2rem, 1.2rem + 0.5vw, 1.5rem)",
          {
            lineHeight: "2rem",
          },
        ],
        lgc: [
          "clamp(1.32rem, 1.32rem + 0.5vw, 1.625rem)",
          {
            lineHeight: "1.75rem",
          },
        ],
        "3xl": [
          "clamp(1.49rem, 1.49rem + 0.5vw, 1.8rem)",
          {
            lineHeight: "2.25rem",
          },
        ],
        "4xm": [
          "clamp(1.73rem, 1.73rem + 0.5vw, 2.13rem)",
          {
            lineHeight: "2.5rem",
          },
        ],
        "4xl": [
          "clamp(1.82rem, 1.82rem + 0.5vw, 2.25rem)",
          {
            lineHeight: "2.5rem",
          },
        ],
        "5xl": [
          "clamp(2.16rem, 2.16rem + 0.5vw, 3rem)",
          {
            lineHeight: "1",
          },
        ],
        "6xl": [
          "clamp(2.88rem, 2.88rem + 0.5vw, 3.75rem)",
          {
            lineHeight: "1",
          },
        ],
        "7xl": [
          "clamp(3.6rem, 3.6rem + 0.5vw, 4.5rem)",
          {
            lineHeight: "1",
          },
        ],
        "8xl": [
          "clamp(4.32rem, 4.32rem + 0.5vw, 6rem)",
          {
            lineHeight: "1",
          },
        ],
        "9xl": [
          "clamp(5.76rem, 5.76rem + 0.5vw, 8rem)",
          {
            lineHeight: "1",
          },
        ],
        "18xl": [
          "clamp(11rem, 11rem + 0.5vw, 16.5rem)",
          {
            lineHeight: "1",
          },
        ],
        "20xl": [
          "clamp(12.76rem, 12.76rem + 2.5vw, 22.5rem)",
          {
            lineHeight: "1",
          },
        ],
      },
      backgroundImage: {
        // "children-face-of-africa": "url('/children-face-of-africa.avif')",
        "brand-custom-gradient-100":
          "linear-gradient(180deg, #F2FCFB 0%, #909695 174.86%)",
      },
      boxShadow: {
        "market-overview-shadow":
          "0px 8px 16px 0px rgba(0, 0, 0, 0.0784313725490196), 0px 0px 4px 0px rgba(0, 0, 0, 0.0392156862745098)",
      },
      borderWidth: {
        0.3: "0.3px",
        0.5: "0.5px",
        1.5: "1.5px",
        2.5: "2.5px",
        3: "3px",
        3.5: "3.5px",
      },
    },
  },
  plugins: [],
};

export default config;
