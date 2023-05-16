/* eslint-disable prettier/prettier */
module.exports = {
  mode: "jit",
  theme: {
    zIndex: {
      9999: 9999,
    },
    extend: {
      colors: {
        sand: "#E1C5B4",
        brown: "#262626",
        flax: "#EDD58D",
        oragYellow: "#FBB91A",
        sonSilver: "#797371",
        camblue: "#A1BEAC",
      },
      height: {
        18: "4.5rem",
      },
      padding: {
        18: "4.5rem",
        98: "28.5rem",
      },
      margin: {
        98: "28.5rem",
      },
    },
    fontFamily: {
      clash: ["ClashDisplay", "sans-serif"],
      mikela: ["Mikela", "cursive"],
      raleway: ["Raleway", "cursive"],
      cairo: ["Cairo", "cursive"],
    },
  },
  screens: {
    xs: "320px",

    sm: "425px",
    // => @media (min-width: 425px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }
  },
  variants: {
    outline: ["responsive", "focus", "hover", "active"],
  },
  plugins: [],
};
