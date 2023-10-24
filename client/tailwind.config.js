import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    scale: {
      "-100": "-1",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      blue: {
        50: "#e6f1fe",
        100: "#cce3fd",
        200: "#99c7fb",
        300: "#66aaf9",
        400: "#338ef7",
        500: "#006FEE",
        600: "#005bc4",
        700: "#004493",
        800: "#002e62",
        900: "#001731",
      },
      // .. rest of the colors
    },
  },
  fontFamily: {
    mont: ["Montserrat", "sans-serif"],
    petrona: ["Petrona", "serif"],
    raleway:['Raleway', 'sans-serif'],
    readex:['Readex Pro', 'sans-serif']
  },
};
export const darkMode = "class";
export const plugins = [nextui({
  addCommonColors: true,
})];
