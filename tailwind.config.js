import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      Lato: ["Lato", "sans-serif"],
    },
    extend: { colors: { primary: "#362FD9", secondary: "#3C84AB" } },
  },
};
