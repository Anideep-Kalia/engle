module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
      colors: {
        primary: {
          50: "#f0f9ff",
  100: "#dbf2ff",
  200: "#aee6fd",
  300: "#7ed3fc",
  400: "#45baf8",
  500: "#1091f2",
  600: "#0a7cd9",
  700: "#0762b2",
  800: "#054d8b",
  900: "#04386a",
        },

        secondary: {
          50: "#f5f3ff",
  100: "#ede9fe",
  200: "#ddd6fe",
  300: "#c4b5fd",
  400: "#a78bfc",
  500: "#8b5cf6",
  600: "#7c3aed",
  700: "#6d28d9",
  800: "#5b21b6",
  900: "#4c1d95",
        },
      },
      height: {
        128: "32rem",
      },
      width: {
        128: "32rem",
      },
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      boxShadow: {
        material: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        material2:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      },
    },
  },
  plugins: [],
};
