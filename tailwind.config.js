const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.js",
  ],

  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      'xxs': '360px',
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },

  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
