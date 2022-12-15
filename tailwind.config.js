module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        index: {
          blue: {
            default: "#225BEC",
            secondary: "#0375fb",
            dark: "#00234D",
          },
          aqua: "#2ED1C7",
          aquahover: "#4aaca2",
          purple: "#c899fd",
          yellow: "#f3c44c",
          gray: "#F2F4F5",
          border: "#d7d8d9",
        },
      },
      fontFamily: {
        sans: ["Basetica", "system-ui"], //this is default
        basetica: ["Basetica", "system-ui"],
        albra: ["AlbraGrotesk", "system-ui"],
      },
      letterSpacing: {
        headline: "0.21em",
      },
      fontSize: {
        base: ["0.9375rem", { lineHeight: "0.9375rem" }],
      },
      screens: {
        md: "768px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
