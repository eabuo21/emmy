/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html}"],
  theme: {
    extend: {
      listStyleType: {
        dash: "-",
      },
      fontFamily: {
        sans: ["Open Sans"],
        cur: ["Cursive"],
        ger: ["Georgia"],
        passion: ["Passion One"],
        lato: ["Lato", "sans-serif"],
        alexbrush: ["Alex Brush"],
        bigshoulders: ['"Big Shoulders Display"', "serif"],
      },
      textColor: {
        primary: "#333333",
        secondary: "#555555",
        tertiary: "#999999",
        quaternary: "#cccccc",
        light: "#f7f7f7",

        muted: "#cccccc",
        mutedLight: "#f2f2f2",
        mutedDark: "#444444",
        success: "#32cd32",
        warning: "#ff8c00",
        error: "#ff0000",
        info: "#1e90ff",
        infoLight: "#e0e0e0",
        infoDark: "#444444",

        tomato: "#ec6952",
      },
      backgroundColor: {
        grey: "#d3d3d3",

        tomato: "#ec6952",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
