/** @type {import('tailwindcss').Config} */

module.exports = {
  corePlugins: {
    preflight: false,
  },
  mode: "jit",
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Poppins,sans-serif"],
      },
      fontSize: {
        base: "16px",
      },
      colors: {
        "locations-hover": "rgba(18,115,196,.06)",
        "border-color": " #f56700",
        "gray-background": "#F5F5F5",
        "light-background": "#F5F3F4",
        blue: "#1273c4",
        purple: "#7e5bef",
        red: "#FF0000",
        "dark-red": "#BB191B",
        gray: "#C0C0C0",
      },
      boxShadow: {
        custom:
          "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      border: {
        orange: "2px solid orange",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    { tailwindcss: { config: "./tailwind.config.js" } },
    { autoprefixer: {} },
  ],
};
