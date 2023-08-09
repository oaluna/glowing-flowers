/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-20": {
      transform: "rotateY(20deg)",
    },
    ".rotate-y-45": {
      transform: "rotateY(45deg)",
    },
    ".rotate-y-60": {
      transform: "rotateY(60deg)",
    },
    ".rotate-y-75": {
      transform: "rotateY(75deg)",
    },
    ".rotate-y-90": {
      transform: "rotateY(90deg)",
    },
    ".rotate-y-120": {
      transform: "rotateY(120deg)",
    },
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
  });
});

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],

  theme: {
    fontFamily: {
      display: ["FRIESKA"],
      sans: ["Celine Sans", "Roboto"],
      serif: ["Nurom"],
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs"), rotateY],
  darkMode: "class",
};
