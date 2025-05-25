// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        screens: {
          sm: "540px", // override default (was 640px)
          md: "768px", // override if needed
          lg: "1024px", // override
          xl: "1280px",
          "2xl": "1536px",
        },
        maxWidth: {
          "screen-sm": "540px", // override max-w-screen-sm
          "screen-md": "768px",
          "screen-lg": "1024px",
          "screen-xl": "1340px",
          "screen-2xl": "1536px",
          "screen-full": "100%", // optional if using max-w-full
        },
        primary: {
          DEFAULT: "#E48700",
          50: "#FF9500",
          light: "#FFF4E3",
        },
        secondary: {
          DEFAULT: "#005DAA",
          light: "#C3E3FF",
        },
      },
      fontFamily: {
        heading: ['"Be Vietnam Pro"', "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "10px" },
        body: { fontSize: "1.6rem" },
      });
    }),
  ],
};
