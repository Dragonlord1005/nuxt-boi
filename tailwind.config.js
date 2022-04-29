module.exports = {
  content: ["./{pages,components,layouts,plugins}/**/*.{vue,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
